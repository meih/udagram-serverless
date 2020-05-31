import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'

// const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const groupsTable = process.env.GROUPS_TABLE

/*
// Sample data
const data = [
    {
        id: '1',
        name: 'Dogs',
        description: 'Bow wow'
    },
    {
        id: '2',
        name: 'Cats',
        description: 'Meow'
    }
];
*/

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO implement
    
    const result = await docClient.scan({
        TableName: groupsTable
    }).promise()
    
    const items = result.Items
    
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            items
        }),
    };
    return response;
};
