import { useState , useEffect, useRef } from 'react';
// import { TicketContext } from './TicketContext';
import axios from 'axios';
import '../App.css';

const TicketsPage = () => {


    
    const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // const response = await axios.get('/api/tickets'); // Assuming your backend route for fetching tickets is '/api/tickets'
        const response = await axios.get('http://localhost:5000/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []); // Run this effect only once, when the component mounts


  
    const [activeTab, setActiveTab] = useState('tab_details');
    const tabContentRefs = {
        'tab_details': useRef(null),
        'tab_venue': useRef(null),
        'tab_organizers': useRef(null)
    };
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    useEffect(() => {
        const scrollToActiveTab = () => {
            if (tabContentRefs[activeTab].current) {
                tabContentRefs[activeTab].current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        scrollToActiveTab();
    }, [activeTab]);
    return (
        
        <div id="tickets" className="tickets-page">


             <div>
      {/* Render tickets here */}
      {tickets.map(ticket => (
        <div key={ticket.id}>
          {/* Render ticket details */}
        </div>
      ))}
    </div>


            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <title>Bookings</title>

                {/* External CSS */}
                {/* <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" /> */}
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                {/* <link rel="stylesheet" href="css/fontawesome-all.min.css" /> */}
                {/* <link rel="stylesheet" href="css/swiper.min.css" /> */}

                
            </head>

            <header className="site-header">
    <div className="header-bar">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-4 text-start"> 
                    <h1 className="site-branding">
                        <a href="#">GET YOUR TICKET</a>
                    </h1>
                </div>


                {/* <div className="col-lg-8 text-end">
                    <nav className="site-navigation ">
                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#"><i className="fas fa-search"></i></a></li>
                        </ul>
                    </nav>
                </div> */}
            </div>
        </div>
    </div>
</header>





            <div className="tabs">
                <ul className="tabs-nav flex">
                    {/* <li className="tab-nav flex justify-content-center align-items-center active" data-target="#tab_details">Details</li>
                    <li className="tab-nav flex justify-content-center align-items-center" data-target="#tab_venue">Venue</li>
                    <li className="tab-nav flex justify-content-center align-items-center" data-target="#tab_organizers">Organizers</li>
                    <li className="tab-nav flex justify-content-center align-items-center" data-target="#tab_about">About the Event</li> */}
                
                    <li className={`tab-nav flex justify-content-center align-items-center ${activeTab === 'tab_details' ? 'active' : ''}`} onClick={() => handleTabClick('tab_details')} data-target="#tab_details">Details</li>
                    <li className={`tab-nav flex justify-content-center align-items-center ${activeTab === 'tab_venue' ? 'active' : ''}`} onClick={() => handleTabClick('tab_venue')} data-target="#tab_venue">Venue</li>
                    <li className={`tab-nav flex justify-content-center align-items-center ${activeTab === 'tab_organizers' ? 'active' : ''}`} onClick={() => handleTabClick('tab_organizers')} data-target="#tab_organizers">Organizers</li>
                    
                </ul>
                <div className="tabs-container">
                <div id="tab_details" className={`tab-content ${activeTab === 'tab_details' ? 'active' : ''}`} ref={tabContentRefs['tab_details']}>
                        <div className="flex flex-wrap">
                            <div className="single-event-details" style={{ width: '30%' , textAlign: 'left'}}>
                                <div className="single-event-details-row">
                                    <label>Start:</label>
                                    <p>June 17 @ 09:00 am</p>
                                </div>

                                <div className="single-event-details-row">
                                    <label>End:</label>
                                    <p>June 22 @ 07:30 am</p>
                                </div>

                                <div className="single-event-details-row">
                                    <label>Price:</label>
                                    <p className="sold-out">$89 <span>Sold Out</span></p>
                                </div>

                                <div className="single-event-details-row">
                                    <label>Categories:</label>
                                    <p>Festivals</p>
                                </div>

                                <div className="single-event-details-row">
                                    <label>Tags:</label>
                                    <p><a href="#">festivals</a>, <a href="#">music</a>, <a href="#">concert</a></p>
                                </div>
                            </div>
                            <div className="single-event-map" style={{ width: '70%' }}>
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* <div id="tab_details" className={`tab-content ${activeTab === 'tab_details' ? 'active' : ''}`}>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum, diam odio tempor purus, at ultrices elit nulla ac nisl. Vestibulum enim sapien, blandit finibus elit vitae, venenatis tempor enim.</p>
                    </div> */}

<div id="tab_venue" className={`tab-content ${activeTab === 'tab_venue' ? 'active' : ''}`} ref={tabContentRefs['tab_venue']}>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum, diam odio tempor purus, at ultrices elit nulla ac nisl. Vestibulum enim sapien, blandit finibus elit vitae, venenatis tempor enim.</p>
                    </div>

                    <div id="tab_organizers" className={`tab-content ${activeTab === 'tab_organizers' ? 'active' : ''}`} ref={tabContentRefs['tab_organizers']}>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum, diam odio tempor purus, at ultrices elit nulla ac nisl. Vestibulum enim sapien, blandit finibus elit vitae, venenatis tempor enim.</p>
                    </div>
                </div>
                
            </div>







            <div className="row">
    <div className="col-12">
        
        <div className="event-tickets">
        <div className="ticket-row flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-2">
                    <h3 className="entry-title">Only One Silver Ticket</h3>
                </div>
                <div className="col-lg-2">
                    <span className="ticket-description">Basic Entry</span>
                </div>
                <div className="col-lg-2">
                    <div className="ticket-price">$89</div>
                </div>
                <div className="col-lg-3">
                    <div className="number-of-tickets flex justify-content-between align-items-center">
                        <span className="decrease-ticket">-</span>
                        <input type="number" name="" value="1" className="ticket-count" />
                        <span className="increase-ticket">+</span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <input type="submit" name="" value="Buy" className="btn mt-2 mb-2 mt-lg-0 mb-lg-0" />
                </div>
            </div>  



            <div className="ticket-row flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-2">
                    <h3 className="entry-title">Only One Gold Ticket</h3>
                </div>
                <div className="col-lg-2">
                    <span className="ticket-description">VVVip Entry</span>
                </div>
                <div className="col-lg-2">
                    <div className="ticket-price">$119</div>
                </div>
                <div className="col-lg-3">
                    <div className="number-of-tickets flex justify-content-between align-items-center">
                        <span className="decrease-ticket">-</span>
                        <input type="number" name="" value="1" className="ticket-count" />
                        <span className="increase-ticket">+</span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <input type="submit" name="" value="Buy" className="btn mt-2 mb-2 mt-lg-0 mb-lg-0" />
                </div>
            </div>


            <div className="ticket-row flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-2">
                    <h3 className="entry-title">One Early Bird Ticket</h3>
                </div>
                <div className="col-lg-2">
                    <span className="ticket-description">Basic Entry</span>
                </div>
                <div className="col-lg-2">
                    <div className="ticket-price">$59</div>
                </div>
                <div className="col-lg-3">
                    <div className="number-of-tickets flex justify-content-between align-items-center">
                        <span className="decrease-ticket">-</span>
                        <input type="number" name="" value="1" className="ticket-count" />
                        <span className="increase-ticket">+</span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <input type="submit" name="" value="Buy" className="btn mt-2 mb-2 mt-lg-0 mb-lg-0" />
                </div>
            </div>




            <div className="ticket-row flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-2">
                    <h3 className="entry-title"> Both Ticket+Camping</h3>
                </div>
                <div className="col-lg-2">
                    <span className="ticket-description">Basic Entry</span>
                </div>
                <div className="col-lg-2">
                    <div className="ticket-price">$219</div>
                </div>
                <div className="col-lg-3">
                    <div className="number-of-tickets flex justify-content-between align-items-center">
                        <span className="decrease-ticket">-</span>
                        <input type="number" name="" value="1" className="ticket-count" />
                        <span className="increase-ticket">+</span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <input type="submit" name="" value="Buy" className="btn mt-2 mb-2 mt-lg-0 mb-lg-0" />
                </div>
            </div>



            <div className="ticket-row flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-2">
                    <h3 className="entry-title">Vip Ticket + Camping</h3>
                </div>
                <div className="col-lg-2">
                    <span className="ticket-description">VVVipEntry</span>
                </div>
                <div className="col-lg-2">
                    <div className="ticket-price">$319</div>
                </div>
                <div className="col-lg-3">
                    <div className="number-of-tickets flex justify-content-between align-items-center">
                        <span className="decrease-ticket">-</span>
                        <input type="number" name="" value="1" className="ticket-count" />
                        <span className="increase-ticket">+</span>
                    </div>
                </div>
                <div className="col-lg-3">
                    <input type="submit" name="" value="Buy" className="btn mt-2 mb-2 mt-lg-0 mb-lg-0" />
                </div>
            </div>


        </div>
    </div>
</div>

            <footer className="site-footer">
                <div className="footer-cover-title flex justify-content-center align-items-center">
                    <h2>EVENT MANAGEMENT SYSTEM </h2>
                </div>

                <div className="footer-content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="entry-title">
                                    <a href="#">NZZ AJ AA</a>
                                </div>

                                <div className="entry-mail">
                                    <a href="#">SAYHELLO@NZZAJAA.COM</a>
                                </div>

                                <div className="copyright-info">
                                    {/* Copyright content */}
                                </div>

                                <div className="footer-social">
                                    {/* Social media icons */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default TicketsPage;
