import React, { Component } from 'react';
import { Form, Button, Message, Input, Icon } from 'semantic-ui-react';
import Camapign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
    state = {
        Value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Camapign(this.props.address);
        const { description, value, recipient} = this.state;

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
                ).send({ from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        
        this.setState({ loading: false });

    };


    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a> <Icon fitted name='arrow alternate circle left' /> Back </a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                         value={this.state.description}
                         onChange = {evenr => this.setState({ description : event.target.value })}                        
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input
                         value={this.state.value}
                         onChange = {evenr => this.setState({ value : event.target.value })}                        
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                         value={this.state.recipient}
                         onChange = {evenr => this.setState({ recipient : event.target.value })}                        
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;