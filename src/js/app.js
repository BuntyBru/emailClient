

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
    content:'Hey bud, would need to meet you tomorrow, Would that be possible, Please let me know about it mate',
    tag:['imp'],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:ID(),
    creator:'Doe',
    subject:'Meeting fixed',
    content:'Are we having a google hangout meeting or zoom ?',
    tag:['secret'],
    date:'22 Jan 2020',
    sendList:['shawn', 'michael']
},
{
    id:ID(),
    creator:'Dravid',
    subject:'Wont be able to come',
    content:'Sorry mate, I have some work tomorrow, Can we have a meeting later on this week',
    tag:['newsletter'],
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
               <div class='tag-holder'>

               </div>

               <p class='creator'>${x.creator}</p>
               <p class='subject'>${x.subject}</p>
               <p class='content'>${x.content}</p>
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
    }
}


//functions



let initialize = () => {
    //set up maillist
    email.showEmails()

}

initialize()