

//email show
//read emails and delete and tag
//email writing and saving anf sending
//

let ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

//variables
const emailListUI = document.querySelector('#mid');
const emailList=[{
    id:ID(),
    creator:'John',
    subject:'Need to meet you',
    content:'Hey bud, would need to meet you tomorrow',
    tag:[],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:ID(),
    creator:'John',
    subject:'Need to meet you',
    content:'Hey bud, would need to meet you tomorrow',
    tag:[],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:ID(),
    creator:'John',
    subject:'Need to meet you',
    content:'Hey bud, would need to meet you tomorrow',
    tag:[],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
}]


//classes
class email {

    constructor(id,creator, subject, content,tag,date,sendList)
    {
        this.id = id;
        this.creator = creator;
        this.subject = subject;
        this.content = content;
        this.tag = tag;
        this.date = data,
        this.sendList = sendList
    }


    static showEmails()
    {
       if(emailList.length > 0)
       {
           emailList.forEach(x => {
               let item = document.createElement('div');
               item.classList='email-item'
               item.innerHTML = `
               <p>${x.creator}</p>
               <p>${x.subject}</p>
               <p>${x.content}</p>
               `;

               emailListUI.append(item)
           })
       }
    }
}


//functions



let initialize = () => {
    //set up maillist
    email.showEmails()

}

initialize()