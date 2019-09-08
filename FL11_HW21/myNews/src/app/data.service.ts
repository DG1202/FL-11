import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }
  currNewsType = -1;
  public filserString = '';

  public data: any[] = [
    { title: 'Politic', data: [
      {
        title: 'hello1' ,
        date: '22/11/2019',
        description: 'A routed Angular application has one singleton instance of the Router service',
        sourceUrl: 'https://img.pravda.com/images/doc/c/7/c7c0d63-clipboard01.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot()
        method in the module imports to configure the router. Each Route maps a URL path to a component.
        There are no leading slashes in the path. The router parses and builds the final URL for you, allowing you to
        use both relative and absolute paths when navigating between application views. The :id in the second route is a
        token for a route parameter. In a URL such as /hero/42, 42 is the value of the id parameter.
        The corresponding HeroDetailComponent will use that value to find and present the hero whose id is 42.
        You'll learn more about route parameters later in this guide.`
      },
      {
        title: 'Billy Joel Plays \'Fishing For Answers' ,
        date: '22/11/2019',
        description: 'The two separate incidents happened in April 2018, both of which also involved the "FEFE" rapper. On April 3, 2018, Jordan, Tekashi and a few others robbed a rival gang member, with Jordan waving a pistol. Three weeks later, an individual',
        sourceUrl: 'https://www.billboard.com/files/styles/article_main_image/public/media/Justin-Bieber-may-2016-billboard-kal-1548.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `Angular does not allow to reload the component the when the parameter in the route changes. 
        Eg: Take our route as /user/:id the first loading ( /user/1 ) the component works fine but when the id 
        changes ( /user/2 )angular just updates the URL but not the component .So this can be fixed by the following ways`
      },
      {
        title: 'The day was sunny' ,
        date: '22/11/2019',
        description: 'approached Jordan, the rapper and other associates at a restaurant. After the individual shouted a derogatory word at them, t',
        sourceUrl: 'https://www.billboard.com/files/styles/article_main_image/public/media/Tekashi-69-feb-2018-billboard-1548.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `I realized then that I had incorrectly equated a white wedding with those outdated dolls. 
        I had wrongly dismissed ancient matrimonial traditions as staid and irrelevant, not recognizing that 
        it was my attitude toward those traditions that had become staid and irrelevant. Love is an eternal 
        act of reinvention, and sometimes that means getting matching tattoos and wearing a leather jacket to 
        your wedding ceremony.`
      },
      {
        title: 'They chose the latter.' ,
        date: '22/11/2019',
        description: 'e group left the restaurant drove away. The individual and another person followed them, leading to Jordan shooting their car twice.',
        sourceUrl: 'https://www.billboard.com/files/styles/left_rail_110x110/public/media/jeff-goldblum-2018-b-billboard-1548.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `My husband and I decided to give our daughter and son-in-law to be an early wedding gift: 
        money to spend however they chose. They could save it, invest it, put it toward a down payment on a 
        future house, or blow it all on a one-day ceremony and celebration.`
      }
    ]
  }, { title: 'Sport', data: [
      {
        title: 'Lionel Messi future: Barcelona preside' ,
        date: '22/11/2019',
        description: 'A routed Angular application has one singleton instance of the Router service',
        sourceUrl:
          `https://talksport.com/wp-content/uploads/sites/5/2019/08/NINTCHDBPICT000511086432-e1565876229448.jpg?strip=all&w=960&quality=100`,
        author: 'Dmytro Gnatyshyn',
        text: `Her desire, as an adult, to play the traditional role of blushing bride seemed at odds with 
        who I knew her to be. She and her boyfriend had lived together for years. They moved across the country 
        together. They landed good jobs in creative fields and made good money. They didn’t need our money to
         pay for the wedding and didn’t ask for it, either. What my daughter needed was for her mother to embrace
          the idea of a wedding.
`
      },
      {
        title: 'Messi on cusp of Pichichi and Golden Shoe' ,
        date: '22/11/2019',
        description: 'A routed Angular application has one singleton instance of the Router service',
        sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Messi_vs_Nigeria_2018.jpg/250px-Messi_vs_Nigeria_2018.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `My daughter’s apparent desire to be a real-life version of it threw me for a loop. But, of course,
         my daughter knew nothing of bride dolls. She grew up with Power Rangers and Spice Girls and 
         Teenage Mutant Ninja Turtles. Sure, she played pretty princess, wearing a bejeweled crown 
         and twirly pink dress. But she also played knight in shining (plastic) armor and slew imaginary dragons 
         on the sidewalk in front of our house. I watched, self-satisfied in my role as co-producer of this 
         wonderful spirited creation. My daughter was as frilly as she was fierce. `
      },
      {
        title: 'Is Cristiano Ronaldo undergoing another evolution' ,
        date: '22/11/2019',
        description: 'A routed Angular application has one singleton instance of the Router service',
        sourceUrl: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/1172937_1.webp?r=1567435258209',
        author: 'Dmytro Gnatyshyn',
        text: `I grew up in an era when expectations for girls and boys were clearly defined and decidedly different.
         Long before Barbie came packaged with exciting careers and coordinating accessories, the quintessential 
         “girl toy” was the bride doll. She came outfitted in the requisite white dress, white veil, white heels, 
         and a tiny artificial bouquet to toss over her plastic shoulder to the next girl doll hoping to snag a groom. 
         The bride doll represented what was supposed to be every little girl’s greatest dream and highest 
         aspiration back then: To be a bride.`
      },
      {
        title: 'Cristiano Ronaldo rejects Serie A ' ,
        date: '22/11/2019',
        description: 'A routed Angular application has one singleton instance of the Router service',
        sourceUrl: 'https://e1.365dm.com/19/07/2048x1152/skysports-ronaldo-cristiano_4731685.jpg',
        author: 'Dmytro Gnatyshyn',
        text: `Once upon a time, I was adventurous. I did the unexpected. I took the road less traveled, both 
        real and metaphorical, and I believed that choice had indeed made all the difference. Sure, over the years
         I’d gradually slouched my way toward Main Street, complete with a steady job, house, husband, two kids, and a dog. 
         Yet, somehow I still clung to the smug belief that I remained 
        a rebel spirit living under the guise of normality. My daughter’s entire white wedding plan was cramping my style.`
      }
    ]
  },
    { title: 'Music', data: [
        {
          title: 'Alessia Cara Thanks Shawn Mendes on Final Tour Stop' ,
          date: '22/11/2019',
          description: '"We are deeply saddened by the news of Chris March’s passing," a Bravo',
          sourceUrl: 'data:image/jpeg;base64,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',
          author: 'Dmytro Gnatyshyn',
          text: `The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot() method
          in the module imports to configure the router. Each Route maps a URL path to a component. There are no leading
          slashes in the path. The router parses and builds the final URL for you, allowing you to use both relative and
          absolute paths when navigating between application views. The :id in the second route is a token for a route
          parameter. In a URL such as /hero/42, "42" is the value of the id parameter. The corresponding HeroDetail
          Component will use that value to find and present the hero whose id is 42. You'll learn more about route
          parameters later in this guide.`
        },
        {
          title: 'Gary Numan on The Pleasure Principle' ,
          date: '22/11/2019',
          description: 'spokesperson said in a statement to The Hollywood Reporter. "He was a favorite among Bravo fans and the fashion',
          sourceUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjENY2Ig1bttmxwIk1_QimSnPmTffEF00ShPn-QkXwxDbNt9J',
          author: 'Dmytro Gnatyshyn',
          text: `The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot() method in
          the module imports to configure the router. Each Route maps a URL path to a component. There are no leading
          slashes in the path. The router parses and builds the final URL for you, allowing you to use both relative
          and absolute paths when navigating between application views. The :id in the second route is a token for a
          route parameter. In a URL such as /hero/42, "42" is the value of the id parameter. The corresponding HeroDeta
          ilComponent will use that value to find and present the hero whose id is 42. You'll learn more about route p
          arameters later in this guide.`
        },
        {
          title: 'Shawn Mendes Wraps North American Tour With' ,
          date: '22/11/2019',
          description: 'community. Our condolences go out to his family and friends. He will truly be missed."\n' +
            '\n' +
            'The designer competed on season ',
          sourceUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVT7vyTdNYDnpbzlV0bWoGP8-WaIYpiko9Fayelk2SGhzUFm0G',
          author: 'Dmytro Gnatyshyn',
          text: `So yes, the expense of a wedding bugged me. But what bothered me more was the idea that any daughter of 
          mine even wanted the traditional pomp and circumstance of a 
          conventional wedding. Why couldn’t she be a good “bad girl” and run off to get hitched like I had?`
        },
        {
          title: 'Project Runway Contestant' ,
          date: '22/11/2019',
          description: 'community. Our condolences go out to his family and friends. He will truly be missed.The designer competed on season ',
          sourceUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9paiX_ZFy5Meg9CnqtyCkRbtu4m8ufRm9L6jIYstjRWX_dTaLA',
          author: 'Dmytro Gnatyshyn',
          text: `As a future mother of the bride, I sucked. I was supposed to get all teary-eyed at the thought of 
          my daughter donning a white dress to walk down an aisle. Instead, I gave the impression my thoughts were focused on 
          the bottom line. But what we talk about when we talk about money and weddings is so much more than dollar signs`
        }
      ]
    },
  ];

  getCurrentNewsType(): any[] {
    if (this.currNewsType === -1) {
      return this.data.reduce((acc, v) => acc.concat(v.data) , []);
    }
    return this.data[this.currNewsType].data;
  }

  addNewArticle(article: object) {
    this.data[this.currNewsType].data.push(article);
  }

  getNewsType() {
    return this.currNewsType;
  }

  getNewsTypeList() {
    return this.data.map(v => v.title);
  }

  changeCurrNewsType(newType) {
    this.currNewsType = newType;
  }
}
