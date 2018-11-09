import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>This is a week one 11.5.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team. Major goals for this week were to pick a development tech stack. Meet the requirments of deploying a front and back end and being able to create user accounts. Also a major part of the week was to come together as a productive team. I tried to foster good teamwork by giving feedback in a positive manner and offering to help in anyway I could. Good comunication was a key aspect of our team cohesion.I dont think anyone provided friction to the process. I think we have a great team dynamic to carry us forward. Our front end URL is <a href="https://clever-ramanujan-6abad4.netlify.com/">Front End</a>
          and our back end URL is <a href="https://adventure-tracker-backend-ewlkjhhafm.now.sh/"></a>
          User accounts can be created URL <a href="https://us1.prisma.sh/thomas-greenhalgh/AdventureTracker/dev">User Accounts</a></p>
          <p>Adventure Tracker team github contribution graph URL is https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors and my github handle is ldavis0866. My personal contributions to the project were to deploy and maintain the project on Netlify. I also implemented the routing with mock pages and links in the Next.js frame work to allow team members to get a feel for how the pages might be connected. I also made a side nav component.<br />
          Front End<br />
          Ticket 1: Page navigation.<br />
          {/* <a href="https://www.gatsbyjs.org/">Gatsby.js</a>  */}
          <a
          href="https://www.github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/17">Git Hub Link</a><br />
          Trello: https://trello.com/c/VB0me11w<br />
          Ticket 2: Side nav component.<br />
          Github: Lambda-School-Labs/Labs8-AdventureTracker: Pull Request 2<br />
          Trello: https://trello.com/c/9m60Oqhe<br />
          Ticket 3: Deploy and maintenance of website<br />
          Github: https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/17<br />
          Trello: https://trello.com/c/C6HtPRJJ<br />
          Ticket 4: Configure linter and formater.<br />
          Github:<br />
          Trello: https://trello.com/c/awIjTS7s<br />
          Back End<br />
          Ticket 1: Reasearch on how to create user accounts.<br />
          Github:<br />
          Trello: https://trello.com/c/jKderASz<br />
          Details of Page Navigation: Page navigation was implemented in the Next.js frame work. I implemented files in the Pages folder. Each page is a seperate file and is a react component that has specific and unique funcionality to the web application. Pages can be linked by practically anything useing the Next.js link component, i used the buttons component in this first implementation. 
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main