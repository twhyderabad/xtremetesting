import React from "react";
import FAQ from "./FAQ";

const FAQs = () => (
            <section className="container faqs" id="faq">
                <h1 className="section-heading">FAQ</h1>
                <FAQ question="Who can attend?">
                     <p>
                        This is an Advanced session of XT, where the attendees from previous XT sessions
                        requested for an in-depth session on topics covered.
                     </p>
                </FAQ>
                <FAQ question="I am new participant, how can I attend?">
                     <p>
                         We will schedule the next basic XT session soon, watch out this space for more.
                     </p>
                     <p>
                        With this we also expect you to have atleast 3+ years of testing experience in manual and know the basics of automation testing.
                     </p>
                    <p>
                        It is NOT restricted to only Hyderabadis. If you can manage your own travel and stay, you are most welcome to apply.      
                    </p>
                </FAQ>
                <FAQ question="Why is this session being conducted for free?">
                    <p>
                        Well, we have been active evangelists of these testing practices for many years. Today we are very happy to see that there is increased interest and awareness of these testing concepts across India and in Hyderabad as well.
                    </p>
                    <p>
                        However, we feel that there is a big gap in the understanding and appreciation of these practices. We would like to share our knowledge to build community around these practices.
                    </p>
                </FAQ>
                <FAQ question="Can I get my laptop?">
                    <p>
                       Preferably no. We will be providing the participants with the laptops on the day of workshop.
                    </p>
                </FAQ>
            </section>
        );

export default FAQs;
