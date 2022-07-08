import  fs from "fs";
import got  from "got";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

//TODO: Make sources into schema for db
const cdi = {
    blogTitle:"",
    url:""
}

const ibm = {
    blogTitle:"",
    url:""
}

const livePerson = {
    blogTitle:"",
    url:""
}

const montrealEthics = {
    blogTitle:"",
    url:""
}

//TODO: Make a list of URLS and make this automatic for each

let getArticleURLs = function() {
const urls = [
        // "https://www.conversationdesigninstitute.com/blog",
        // "https://www.liveperson.com/blog/conversational-ai/",
        // "https://www.ibm.com/blogs/watson/",
        // "https://montrealethics.ai/?s=conversational+ai",
        // "https://vux.world/articles/",
        // "https://venturebeat.com/tag/nlp/",
            "https://cobusgreyling.medium.com/"
            ];

for (let i = 0; i < urls.length; i++ ){
    let links = [];
    let titles =[];
    got(urls[i]).then(response => {
        const dom = new JSDOM(response.body);
        
        dom.window.document.querySelectorAll('a').forEach(link => {
        links.push(link.href);
        })
        dom.window.document.querySelectorAll('a').forEach(link => {
            titles.push(link.textContent);
            })

        switch(urls[i]) {
            case "https://www.conversationdesigninstitute.com/blog":
                cdi.url = links[17];
                cdi.blogTitle = titles[12];

                console.log(cdi.url);
                console.log(cdi.blogTitle);

                break;
            case "https://www.liveperson.com/blog/conversational-ai/":
                console.log("https://www.liveperson.com"+links[69])
                break;
            case "https://www.ibm.com/blogs/watson/":
                console.log(links[15])
                console.log(titles[13].substr(0,85))
                break;
            case "https://montrealethics.ai/?s=conversational+ai": 
                console.log(links[36])
                console.log(titles[37])
                break;
            case "https://vux.world/articles/": 
                console.log(links[26])
                console.log(titles[26])
                break;
            case "https://venturebeat.com/tag/nlp/": 
                console.log(links[67])
                console.log(titles[68])
                break;
            case "https://cobusgreyling.medium.com/": 
                console.log("https://cobusgreyling.medium.com/"+links[11])
                console.log(titles[12].substr(0,47))
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
