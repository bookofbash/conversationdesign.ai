import  fs from "fs";
import got  from "got";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

//TODO: Make sources into schema for db

const articleList = [];

const cdi = {
    title:"",
    url:""
}

const ibm = {
    title:"",
    url:""
}

const livePerson = {
    title:"",
    url:""
}

const montrealEthics = {
    title:"",
    url:""
}

const vuxWorld = {
    title:"",
    url:""
}

const ventureBeat = {
    title:"",
    url:""
}

const cobusGreyling = {
    title:"",
    url:""
}

const analyticsInsight = {
    title:"",
    url:""
}

const uxMag = {
    title:"",
    url:""
}

const voiceBot = {
    title:"",
    url:""
}

//TODO: Make a list of URLS and make this automatic for each

let getArticleURLs = function() {
const urls = [
        "https://www.conversationdesigninstitute.com/blog",
        "https://www.liveperson.com/blog/conversational-ai/",
        "https://www.ibm.com/blogs/watson/",
        "https://montrealethics.ai/?s=conversational+ai",
        "https://vux.world/articles/",
        "https://venturebeat.com/tag/nlp/",
        "https://cobusgreyling.medium.com/",
        "https://www.analyticsinsight.net/category/conversational-ai/",
        "https://uxmag.com/latest-articles",
        "https://voicebot.ai/virtual-humans/"
            
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
            console.log("Here's the lst "+articleList)
                cdi.url = links[12];
                cdi.title = titles[12];
                articleList.push(cdi)

                if (articleList.some(url => cdi.url === links[12])){
                    console.log("Exists in array")
                } else {
                    console.log("Something new")
                }
                console.log(articleList)

                break;
            case "https://www.liveperson.com/blog/conversational-ai/":
                livePerson.url = "https://www.liveperson.com"+links[69]
                livePerson.title = titles[69]
                articleList.push(livePerson)

                break;
            case "https://www.ibm.com/blogs/watson/":
                ibm.url = links[15]
                ibm.title = titles[13].substr(0,85)
                articleList.push(ibm)

                break;
            case "https://montrealethics.ai/?s=conversational+ai": 
                montrealEthics.url = links[36]
                montrealEthics.title = titles[37]
                articleList.push(montrealEthics)

                break;
            case "https://vux.world/articles/": 
                vuxWorld.url = links[26]
                vuxWorld.title = titles[26]
                articleList.push(vuxWorld)

                break;
            case "https://venturebeat.com/tag/nlp/": 
                ventureBeat.url = links[67]
                ventureBeat.title = titles[68]
                articleList.push(ventureBeat)

                break;
            case "https://cobusgreyling.medium.com/": 
                cobusGreyling.url = "https://cobusgreyling.medium.com/"+links[11]
                cobusGreyling.title = titles[12].substr(0,47)
                articleList.push(cobusGreyling)
                break;
                //Todo: Make this work
            // case "https://www.analyticsinsight.net/category/conversational-ai/": 
            //     console.log(links)
            //     console.log(titles)
            //     break;
            case "https://uxmag.com/latest-articles": 
                uxMag.url = links[22]
                uxMag.title = titles[22]
                articleList.push(uxMag)

                break;
            case "https://voicebot.ai/virtual-humans/": 
                voiceBot.url = links[89]
                voiceBot.title = titles[95]
                articleList.push(voiceBot)

                break;
            default:
                console.log("Error")
        }


    }).catch(err => {
        console.log(err);
    })
};

};
let updateArticleList = function (newData){

}
getArticleURLs()

export default articleList ;


