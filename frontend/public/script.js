// 'use strict';

// const fs = require('fs');
// import fs from 'fs';


var inputForm=document.getElementById('post-form')

const addNewPost=(event)=>{
        event.preventDefault() // prevents the form from autosubmitting
        let allPost=[];
        let newPost = {
            
            id: Date.now,
            userName: document.getElementById('userName').value,
            caption: document.getElementById('caption').value,
            imgUrl: document.getElementById('memeURL').value,
        }

        // let data = JSON.stringify(newPost);
        // fs.writeFileSync('postData.json', data, finished);

        // function finished(err){
        //     console.log('succes! Data Filled Successfully!')
        // }
        console.log(newPost)
        // allPost.push(newPost); 

        inputForm.reset(); // to clear the form for next enteries
        // process.exit(0);
        // return;
    
        console.log("i am inside event listner!");
    }

document.addEventListener('DOMContentLoaded', ()=>{
    inputForm.addEventListener('submit', addNewPost)
})

console.log("i am outside event listner!");

// userName=document.getElementById('userName').value;
// caption=document.getElementById('caption').value;
// imgUrl=document.getElementById('memeURL').value;
// console.log(userName, caption, imgUrl);
// inputForm.reset();