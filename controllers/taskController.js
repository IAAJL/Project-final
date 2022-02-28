const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const mongoose = require('mongoose')
const task = mongoose.model('Task')

router.get('/',(req,res) =>
{
    res.render('task/addEdit',
    {
        ViewTitle : "Add to your To-Do List"
    })
})
router.post('/',(req,res) =>
{
    newTask(req,res)
})

router.get('/list',(req,res) =>
{
    task.find((err,docs)=>
    {
        if(!err)
        res.render('task/list',
        {

            list : docs.map(docs => docs.toJSON())
        })
        else{
            console.log("Error 15 -"+err)
        }
    })
})

router.get('/delete/:id',(req,res)=>
{
    task.findByIdAndRemove(req.params.id,(err,docs)=>
    {
        if(!err)
        {
            res.redirect('/task/list')
        }
        else
        {
            console.log("Error 5= "+err)
        }
    }
)})
router.get('/edit/:id',(req,res)=>
{
    res.render('task/addUpdate',{
        ViewTitle1 : "Change your task",
        ViewTitle2 :"Modify your task",
        wasp : req.params.id,
        wasp2 : req.params.id
    })
})

router.post('/modify',(req,res)=>
{
    editTask(req,res)
})

function newTask(req,res)
{
    var Task = new task()
    Task.taskName = req.body.taskName
    Task.taskDesc = req.body.taskDesc
    Task.save((err,docs)=>
    {
        if(!err)
        {
            res.write("Success")
            res.end()
        }
        else
        console.log("Error 2= "+err)
    }   
    )
}
function editTask(req,res)
{
    if(req.body.tttt==null)
    {
        delete req.body.ttttt
        var id = req.body.tttt
        delete req.body.tttt
        var info = req.body

        for(var i in info)
        {
            if(info[i]=='')
            {
                delete info[i]
            }
        }
    }
    else{
        var id = req.body.ttttt
        delete req.body.ttttt
        delete req.body.tttt
        var info = req.body
    }

    task.findByIdAndUpdate(id,info,{upsert:true,new:true},(err,docs)=>
    {
        if(!err)
        {
            res.redirect("list")
        }
        else{
            console.log("Error 3= "+err)
        }
    })
    
}
module.exports = router