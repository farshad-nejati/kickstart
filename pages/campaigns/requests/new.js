import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Camapign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
    state = {
        Value: '',
        description: '',
        recipient: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }


    render() {
        return (
            <Layout>
                <h3>Create a Request</h3>

                <Form>
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

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;