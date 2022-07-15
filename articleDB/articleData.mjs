// const { create } = require('domain');
import {create} from 'domain';
// const {MongoClient} = require('mongodb');
import { MongoClient } from 'mongodb';

import articleList from '../getArticles/index.mjs';
//What I want to do:
//Write all current blogs to database
//Scrape New Data
// If new data is not in data base send alert
//add new data to database
async function main() {
    const uri = "mongodb+srv://username:Impact123@cluster0.23zeo.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri)

    try {
        //connect to database
        await client.connect();
        await createMultipleListings(client, articleList);
        // await findOneListingByName(client, "New Title 02");
        //add a new post
        // await createListing(client, {
        //     blogTitle: "New Title",
        //     url: "New URL"
        // })
        // await createMultipleListings(client,
        //     [
        //         {
        //             blogTitle: "New Title 02",
        //             url: "New URL 02"
        //         },
        //         {
        //             blogTitle: "New Title 03",
        //             url: "New URL 03"
        //         },
        //         {
        //             blogTitle: "New Title 04",
        //             url: "New URL 04"
        //         },
        //         {
        //             blogTitle: "New Title 05",
        //             url: "New URL 05"
        //         },
        //         {
        //             blogTitle: "New Title 06",
        //             url: "New URL 06"
        //         }

        //     ])


    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
    
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing){
const result = await client.db("blog").collection("posts")
.findOne({title: nameOfListing });

if (result) {
    console.log(`found a listing with the name '${nameOfListing}'`);
    console.log(result)
}else {
    console.log(`No listings found with the name '${nameOfListing}'`)
}

}

async function createMultipleListings(client, newListings) {
    const result = await client.db("blog").collection("posts")
    .insertMany(newListings)

    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

async function createListing(client, newListing) {
    const result = await client.db("blog").collection("posts").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// async function listDatabases(client) {
//    const databasesList = await client.db().admin().listDatabases();

//    console.log("Databases: ");
//    databasesList.databases.forEach(db => {
//     console.log(`- ${db.name}`);
//    });
// }

