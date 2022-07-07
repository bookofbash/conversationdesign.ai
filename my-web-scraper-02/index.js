import  fs from "fs";
import got  from "got";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const conversationDesignInstitute = {
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
        "https://vux.world/articles/"
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
                conversationDesignInstitute.url = links[17];
                conversationDesignInstitute.blogTitle = titles[12];

                console.log(conversationDesignInstitute.url);
                console.log(conversationDesignInstitute.blogTitle);

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
            default:
                console.log("Error")
        }


    }).catch(err => {
        console.log(err);
    })
};

};

getArticleURLs();
