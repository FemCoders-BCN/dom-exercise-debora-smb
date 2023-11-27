import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'
import {redColor, grayColor, blackColor} from '../src/js/app'

describe('APP',()=>{
    let dom;
    let document;
    let backgroundMock;
    let productImgeMock;
    let tagMock;
    let buttonAddCartMock;
})

    beforeAll(async () => {
        dom = await JSDOM.fromFile("index.html", {
          resources: "usable",
          runScripts: "dangerously",
        })
    });

    

      it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        console.log(link.href);
        // expect(link.href).toMatch(/\/src\/css\/style.css$/);
        // expect(link.href).toMatch;
      });

    


