

//email show
//read emails and delete and tag
//email writing and saving anf sending
//

let ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

//variables
const mainParent = document.querySelector('.main-parent');
const emailListUI = document.querySelector('#mid');
const emailShowUI = document.querySelector('#right')
const composeButton = document.querySelector('.compose-btn');


const side = document.querySelector('#side');

const inboxEntry = side.querySelector('.inbox-entry');
const draftEntry = side.querySelector('.draft-entry');
const sentEntry = side.querySelector('.sent-entry');
const trashEntry = side.querySelector('.trash-entry');

const emailList=[{
    id:'one',
    creator:'John',
    subject:'Need to meet you',
    content:'Hey bud, would need to meet you tomorrow, Would that be possible, Please let me know about it mate',
    tag:['imp'],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:'two',
    creator:'Doe',
    subject:'Meeting fixed',
    content:'Are we having a google hangout meeting or zoom ?',
    tag:['secret'],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:'three',
    creator:'Dravid',
    subject:'Wont be able to come',
    content:'Sorry mate, I have some work tomorrow, Can we have a meeting later on this week',
    tag:['newsletter'],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
]

const sentEmail=[];
const draftEmail=[];
const trashEmail=[];



//classes
class Email {

    constructor(id,creator, subject, content,tag,date,sendList)
    {
        this.id = id;
        this.creator = creator;
        this.subject = subject;
        this.content = content;
        this.tag = tag;
        this.date = date,
        this.sendList = sendList
    }


    static showEmails(emailList)
    {
        while (emailListUI.firstChild) {
            emailListUI.removeChild(emailListUI.firstChild);
        }
      
       if(emailList.length > 0)
       {
           emailList.forEach(x => {
               let item = document.createElement('div');
               
               item.classList='email-item'
               let i = 'item-'+ x.id 
               item.classList.add(i)
               item.innerHTML = `
               <div class='tag-holder'>

               </div>

               <p>${x.creator}</p>
               <p>${x.subject}</p>
               <p>${x.content}</p>
               `;

               if(x.tag.length>0)
               {
                let tagger = item.querySelector('.tag-holder');
                let  para = document.createElement('p');
                   switch (x.tag[0])
                   {
                    case 'imp':
                       para.classList='tag-p-imp';
                       tagger.append(para)
                        break;
                    case 'book':
                        para.classList='tag-p-book';
                       tagger.append(para)
                        break;
                    case 'work':
                            para.classList='tag-p-work';
                           tagger.append(para)
                            break;
                    case 'personal':
                        para.classList='tag-p-personal';
                        tagger.append(para)
                        break;
                    case 'newsletter':
                        para.classList='tag-p-newsletter';
                        tagger.append(para)
                        break;
                    case 'secret':
                        para.classList='tag-p-secret';
                        tagger.append(para)
                        break;
                   }
               
               }

          
               emailListUI.append(item)
           })
       }


       else
       {
           let noData = document.createElement('div');

           noData.classList.add('no-data-element');

           noData.innerHTML = `
           <i class="fas fa-exclamation-triangle"></i>
           <p>No emails here at this moment
           `;
           emailListUI.append(noData)
       }

      
    }

   
}




//functions

let addEmail = (id,creator, subject, content,tag,date,sendList ,listName, countName) => {
let newEmail = new Email(id,creator, subject, content,tag,date,sendList);
listName.push(newEmail);
countManager(countName);

console.log(listName);
}


let initialize = () => {
    //set up maillist
    Email.showEmails(emailList);
    countManager('inboxList');
    countManager('sentList');
    countManager('draftList');
    countManager('trashList');

}

let countManager = (item) =>{
    let t = document.createElement('span')
    switch(item)
    {
        case 'inboxList':
            t.textContent = emailList.length;
            if(inboxEntry.firstChild)
            {
                inboxEntry.removeChild(inboxEntry.firstChild);
   
            }
            if(emailList.length > 0)
            {
                inboxEntry.append(t);
                
            }
            break;
        
        case 'sentList':
            t.textContent = sentEmail.length;
            if(sentEntry.firstChild)
            {
                sentEntry.removeChild(sentEntry.firstChild);
             
            }
            if(sentEmail.length > 0)
            {
                sentEntry.append(t);
            }
            break;
        
        case 'draftList':
            t.textContent = draftEmail.length;
            if(draftEntry.firstChild)
            {
                draftEntry.removeChild(draftEntry.firstChild);
            }

            if(draftEmail.length > 0)
            {
                draftEntry.append(t);
            }


            break;
        
        case 'trashList':
            t.textContent = trashEmail.length;
            if(trashEntry.firstChild)
            {
                trashEntry.removeChild(trashEntry.firstChild);
            }

            if(trashEmail.length > 0 )
            {
                trashEntry.append(t);
            }

            break;

    }


    //increase the count of mails in each section
}

let showMailFull = (item) => {

    emailShowUI.removeChild(emailShowUI.firstChild);

    let t = document.createElement('div');

    t.innerHTML = `
    
    <div>
    Hello ${item.id}

    </div>`

    emailShowUI.append(t)    

}

emailListUI.addEventListener('click',(event)=>{
  let t = event.target.parentElement.classList;

  if(t[1])
  {
    let id = t[1].split('-')[1];

    emailList.forEach(x => {
        if(x.id == id)
        {
           showMailFull(x)
        }
        
    }) 
  }
})


composeButton.addEventListener('click',()=>{
    console.log("open a modal")

    let modal = document.createElement('div');
    modal.className='my-modal'


    modal.innerHTML = `
    <div class='content'>

    <div class='form-parent'>


    <input type="text" placeholder="To" id="to"/>

    <input type="text" placeholder="Subject" id="subject" />

    <textarea rows="20" cols="50" id='txt-area'>
    </textarea>

    <div class='btn-holder-modal'>
    <button class='send-btn'>Send</button>

    <button class='del-btn'> <i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
   

    </div>

    
    </div>
    `;

    mainParent.append(modal)

    modal.addEventListener('click',(event)=>{
        if(event.target.parentElement.className == 'main-parent')
        {
          formChecker(modal,draftEmail,'draftList')
          modal.remove()
        }
    })

    modal.querySelector('.send-btn').addEventListener('click',()=>{
        formChecker(modal,sentEmail,'sentList')
    })

    modal.querySelector('.del-btn').addEventListener('click',()=>{

        modal.remove()
    })




})

function formChecker(myModal,listName,countListName)
{
    let name = myModal.querySelector('#to').value;
    let subject = myModal.querySelector('#subject').value;
    let txtarea = myModal.querySelector('#txt-area').value;
    

    if(name.trim().length !== 0  && subject.trim().length !== 0 && txtarea.trim().length !== 0 )
    {
        let sendList = name.split(',')
        addEmail(ID(),'Bunty', subject, txtarea,[],new Date(),sendList,listName,countListName);
        myModal.remove();
    }
}



//click function for left bar

let listOneLi = side.querySelectorAll('.list-one li')
listOneLi.forEach(li => {

   
    li.addEventListener('click', (event) => { 
        listOneLi.forEach(x => x.classList.remove('active-li'))
      switch(event.target.className){
  
        case 'inbox':
            Email.showEmails(emailList);
            event.target.classList.add('active-li');
            break;
        
        case 'draft':
            Email.showEmails(draftEmail);
         
            event.target.classList.add('active-li');
            break;

        case 'sent':
            Email.showEmails(sentEmail);
           
            event.target.classList.add('active-li');
            break;
        
        case 'trash':
            Email.showEmails(trashEmail);
           
            event.target.classList.add('active-li');
            break;
              
      }
      
  
  });

  
  })





initialize()