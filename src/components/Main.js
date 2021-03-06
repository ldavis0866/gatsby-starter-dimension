import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import project from '../images/project.png'
import stripe from '../images/stripe.png'
import map from '../images/map.png'
import trips from '../images/trips.png'
import settings from '../images/settings.png'

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
          <span className="image main"><img src={project} alt="" /></span>
          <p>This is week one 11.5.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team. Major goals for this week were to pick a development tech stack. Meet the requirments of deploying a front and back end and being able to create user accounts. Also a major part of the week was to come together as a productive team. I tried to foster good teamwork by giving feedback in a positive manner and offering to help in anyway I could. Good comunication was a key aspect of our team cohesion. I dont think anyone provided friction to the process. I think we have a great team dynamic to carry us forward. Our links are <a href="https://adventure-tracker-frontend.netlify.com"> Front End</a>, <a href="https://adventuretracker.now.sh/"> Back End</a> .</p>
          <p>Adventure Tracker team github contribution<a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors"> Graph</a> and my github handle is ldavis0866. My personal contributions to the project were to deploy and maintain the project on Netlify. I also implemented the routing with mock pages and links in the Next.js frame work to allow team members to get a feel for how the pages might be connected. I also made a side nav component.<br />
          Front End<br />
          Ticket 1: Page navigation<br />
          <a
          href="https://www.github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/17">Git Hub</a><br />
          <a href="https://trello.com/c/VB0me11w">Trello</a><br />
          Ticket 2: Side nav component<br />
          <a
          href="https://www.github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/request/2">Git Hub</a><br />
          <a
          href="https://trello.com/c/9m60Oqhe">Trello</a><br />
          Ticket 3: Deploy and maintenance of website<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/17">Git Hub</a><br />
          <a
          href="https://trello.com/c/C6HtPRJJ">Trello</a><br />
          Ticket 4: Configure linter and formater<br />
          Github<br />
          <a
          href="https://trello.com/c/awIjTS7s">Trello</a><br />
          Back End<br />
          Ticket 1: Research on how to create user accounts<br />
          Github<br />
          <a
          href="https://trello.com/c/jKderASz">Trello</a><br />
          </p>
          <p>
          Details of Page Navigation:<br /> Page navigation was implemented in the Next.js frame work. I implemented files in the Pages folder. Each page is a seperate file and is a react component that has specific and unique funcionality to the web application. Pages can be linked by practically anything useing the Next.js link component, i used the buttons component in this first implementation. 
          </p>
          <span className="image main"><img src={map} alt="" /></span>
          <p>This is week two 11.12.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team. Major goals for this week were to implement all API's used in the project and connect front and back ends of application. API's Implemented were Google Maps, OAuth and Stripe. We completed all tasks except full OAuth implementation. We worked very well as a team with good comunication and collaboration. I was involved with helping to connect front and back ends and for the implementation of the Stripe credit card charging API. Also we had a <a href="https://youtu.be/5Z8GefPhH_8"> White Board Interview</a> solving a technical problem. I think we have a great team dynamic and solid work to date to carry us forward. Our links are <a href="https://adventure-tracker-frontend.netlify.com"> Front End</a>, <a href="https://adventuretracker.now.sh/"> Back End</a>.</p>
          <p>Adventure Tracker team github contribution<a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors"> Graph</a> and my github handle is ldavis0866.<br />
          Links to my contribution to project are listed below.<b />
          </p>
          <p>Front End<br />
          Ticket 1: Connecting front and back ends<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/34">Git Hub</a><br />
          <a href="https://trello.com/c/C6HtPRJJ">Trello</a><br />
          Ticket 2: Added Netlify .toml file to complete continuous deployment from Github repo<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/23">Git Hub</a><br />
          <a
          href="https://trello.com/c/9m60Oqhe">Trello</a><br />
          Ticket 3: Implementation of basic Stripe billing component <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/29">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Ticket 4: Completed Stripe front end implementation of basic functionality<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/37">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Back End<br />
          Ticket 1: Began backend implementation of Stripe API<br /><a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/41">Git Hub</a>
          <br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          </p>
          <p>
          Details of Strip API implementation:<br />I activated a Stripe acount and received two test keys, one publishable and one secret. Publishable key was placed in front end and allows user to send their credit card information to Stripe. Stripe then sends a one time use token which is sent to back end where secret key allows the charge to take place. A React billing component implementing the StripeCheckout component was made which is rendered on the billing page. 
          </p>
          <span className="image main"><img src={stripe} alt="" /></span>
          <p>This is week three 11.26.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team. I think we have a great team dynamic and solid work to date to carry us forward. Working with a team to convert a disparate set of components into a single, cohesive, and complete product was very challenging especially in a remote setting. Communitcation was key for our success usign a combination of Slack channels and Zoom meetings. In describing the challenges I faced and the steps I took to overcome them, I would say I checked in frequently with team members when ever I had a problem and made sure my work was integration with the team. Major goals for this week were to implement all API's funcitonality used in the project and connect the API's content with the front and back ends of application.</p><p>Here is a list of each major feature in our specification and a link provided to where that feature is implemented.</p>
          <p>1.<a href="https://adventure-tracker-frontend.netlify.com/app/"> Google Map API</a></p>
          <p>2.<a href="https://adventure-tracker-frontend.netlify.com/billing/"> Stripe API</a></p>
          <p>3.<a href="https://adventure-tracker-frontend.netlify.com"> Facebook OAuth</a></p>
          <p>Also we had a <a href="https://youtu.be/CJh286AGcT4"> White Board Interview</a> solving the technical problem of Ring Buffer data structure implementation. Our links are <a href="https://adventure-tracker-frontend.netlify.com"> Front End</a>, <a href="https://adventuretracker.now.sh/"> Back End</a>.</p>
          <p>Adventure Tracker team github contribution<a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors"> Graph</a> and my github handle is ldavis0866.<br />
          Links to my contribution to project are listed below.<b />
          </p>
          <p>Front End<br />
          Ticket 1: Wrapped StripeCheckout component with User component to attache user data and added price and title fields payment modal.<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/50">Git Hub</a><br />
          <a href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Ticket 2: Wrapped StripeCheckout component in Mutation component and called createOrder mutation on front end. And on backend also added Order data model and createOrder mutation on backend.<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/72">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Ticket 3: Completed Billing component base functionality with Stripe API. <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/77">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          <b />Back End<br />
          Ticket 1: Added Stripe datamodel to backend with mutation and began resolver.<br /><a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/58">Git Hub</a>
          <br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Ticket 2: Graphql resolver for Stripe API base functionality complete.<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/78">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          Back End<br />
          </p>
          <p>
          Details of completion of Strip API implementation:<br />I fully implemented the Stripe API by wrapping StripeCheckout component with User component to attached user data and added price and title fields to payment modal. I added Stripe datamodel to backend with createOrder mutation and began resolver. I then wrapped StripeCheckout component in Mutation component and called createOrder mutation on front end. That completed Billing component base functionality with Stripe API.  
          </p>
          <span className="image main"><img src={trips} alt="" /></span>
          <p>This is week four 12.03.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team.  Working as a team to make our product look and feel as good as it works under the hood. Our team shifted tasks towards the front end - and debugging the back end to improve UX. Working with a team to convert a disparate set of components into a single, cohesive, and complete product that looks and feels good was very challenging especially in a remote setting. Communitcation was key for our success using a combination of Slack channels and Zoom meetings. I think we have a great team dynamic and solid work to date to carry us forward. In describing the challenges I faced and the steps I took to overcome them, I would say I checked in frequently with team members when ever I had a problem and made sure my work was integration with the team. Major goals for this week were work on bugs and the user experiance.</p><p>Links to major application pages and describes any remaining bugs, fixes, or tasks that need to be completed on that page.</p>
          <p>1.<a href="https://adventure-tracker-frontend.netlify.com/app/"> Google Map API</a> Responsiveness, Styling, User funcionality.</p>
          <p>2.<a href="https://adventure-tracker-frontend.netlify.com/triplist/"> Trip List</a> Responsiveness, Styling, User funcionality</p>
          <p>3.<a href="https://adventure-tracker-frontend.netlify.com/archivelist/"> Trip Archive</a> Responsiveness, Styling, User funcionality</p>
          <p>Also we had a <a href="https://youtu.be/azF2j3NneKs"> White Board Interview</a> solving the technical problem of Reversed Linked List implementation. Our links are <a href="https://adventure-tracker-frontend.netlify.com"> Front End</a>, <a href="https://adventuretracker.now.sh/"> Back End</a>.</p>
          <p>Adventure Tracker team github contribution<a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors"> Graph</a> and my github handle is ldavis0866.<br />
          Links to my contribution to project are listed below.<b />
          </p>
          <p>Front End<br />
          Ticket 1: Implemented React-copy-clipboard to ClipBoard component accessed on Trip open page in order to save current url for trip share functionality.<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/89">Git Hub</a><br />
          <a href="https://trello.com/c/Mw1LWMLp">Trello</a><br />
          Ticket 2: Added funcionality to ClipBoard component to add user id to saved URL.<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/90">Git Hub</a><br />
          <a
          href="https://trello.com/c/Mw1LWMLp">Trello</a><br />
          Ticket 3: Added more pages with links. <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/83">Git Hub</a><br />
          <a
          href="https://trello.com/c/VB0me11w">Trello</a><br />
          Ticket 4: Added folder with screenshots of Map API for use in trip list components. <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/100">Git Hub</a><br />
          <a
          href="https://trello.com/c/TBLewyss">Trello</a><br />
          Ticket 5: Stripe implemetation blocked due to css styling issues resolved. <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/106">Git Hub</a><br />
          <a
          href="https://trello.com/c/Fx7RFvSs">Trello</a><br />
          <b />Back End<br />
          Ticket 1: Implementing mock trip cards in trip list and trip archive pages.<br /><a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/97">Git Hub</a>
          <br />
          <a
          href="https://trello.com/c/TBLewyss">Trello</a><br />
          </p>
          <p>
          Details of completion ClipBoard component implementation:<br />I fully implemented a React front end component that utilized the react-copy-clipboard npm moduel. A use will click a share button on trip open page and the current link with the users id will be saved to the clipboard to be shared with friends to monitor the trip.  
          </p>
          <span className="image main"><img src={settings} alt="" /></span>
          <p>This is week five 12.10.2018 retrospective of the work process of the Lambda Labs Adventure Tracker team. In describing some of the final tasks that were the most difficult for our team to resolve we had some challenging bugs, like unexpected errors when buttons were pushed and unexpected results when user events were triggered. Layout and presentation problems presisted as with mobile responsiveness not being achived yet. We got all major funcionality working but not bug free. Working as a team to make our project complete will still take some time. Working with a team to convert a design specification into a single, cohesive, and complete product that looks and feels good was very challenging especially in a remote setting. Communitcation was key for our success using a combination of Slack channels and Zoom meetings. In describing the challenges I faced and the steps I took to overcome them, I would say I checked in frequently with team members whenever I had a problem and made sure my work was integrated with the team.</p><p>Our links are <a href="https://adventure-tracker-frontend.netlify.com"> Front End</a>, <a href="https://adventuretracker.now.sh/"> Back End</a>.</p>
          <p>Adventure Tracker team github contribution<a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/graphs/contributors"> Graph</a> and my github handle is ldavis0866.<br />
          Links to my contribution to project are listed below.<b />
          </p>
          <p>Front End<br />
          Ticket 1: Corners rounded on SideNav bar buttons <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/126">Git Hub</a><br />
          <a href="https://trello.com/c/qUW7rdWs">Trello</a><br />
          Ticket 2: Added background image to settings page and changed opacity of form component .<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/134">Git Hub</a><br />
          <a
          href="https://trello.com/c/qUW7rdWs">Trello</a><br />
          Ticket 3: Added margin to trips in archived trip page and margin and rounded corners to unarchive button<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/144">Git Hub</a><br />
          <a
          href="https://trello.com/c/qUW7rdWs">Trello</a><br />
          Ticket 4: Added margin to trip in trip list page and added margin and rounded corners to archive button in trip  <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/143">Git Hub</a><br />
          <a
          href="https://trello.com/c/qUW7rdWs">Trello</a><br />
          Ticket 5: Made sign-up page responsive<br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/138">Git Hub</a><br />
          <a
          href="https://trello.com/c/TYEel5sz">Trello</a><br />
          Ticket 6: Made login page responsive  <br />
          <a
          href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/140">Git Hub</a><br />
          <a
          href="https://trello.com/c/TYEel5sz">Trello</a><br />
          <b />Back End<br />
          Ticket 1: Added paid and tripcount fields to User data model with corresponding changes to schema and resolver<br />
          <a href="https://github.com/Lambda-School-Labs/Labs8-AdventureTracker/pull/125">Git Hub</a>
          <br />
          <a
          href="https://trello.com/c/VVQvNay5">Trello</a><br />
          </p>
          <p>
            My contribution this week was to make the landing, sign-up and sign-in pages responsive and to implement CSS changes to improve  the visual aspect of the project.
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