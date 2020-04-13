var expect  = require('chai').expect;
var request = require('request');

it("About page",(done)=>{
    request("http://localhost:8080/about" ,(err,res,body)=>{
        expect(body).to.equal("about");
        done();
    })
})

// it("post request",(done)=>{
//     request.post("http://localhost:8080/send" ,{"dd":"dd"},(err,res,body)=>{
//     console.log(body)   
//     expect(body).to.equal("dd");
//         done();
//     })
// })
