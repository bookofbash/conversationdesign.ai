import  fs from "fs";
import got  from "got";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const conversationDesignInstitute = {
    blogTitle:"",
    url:""
}
//TODO: Make a list of URLS and make this automatic for each

let getArticleURLs = function() {
const urls = [
        "https://www.conversationdesigninstitute.com/blog",
        "https://www.liveperson.com/blog/conversational-ai/"

            ];
for (let i = 0; i < urls.length; i++ ){
    let links = [];
    got(urls[i]).then(response => {
        const dom = new JSDOM(response.body);
        
        dom.window.document.querySelectorAll('a').forEach(link => {
        links.push(link.href);
        })
        switch(urls[i]) {
            case "https://www.conversationdesigninstitute.com/blog":
                conversationDesignInstitute.url = links[15];
                console.log(conversationDesignInstitute.url);
                break;
            case "https://www.liveperson.com/blog/conversational-ai/":
                console.log("https://www.liveperson.com"+links[69])
                break;
            default:
                console.log("Error")
        }


    }).catch(err => {
        console.log(err);
    })
};

};

getArticleURLs();
