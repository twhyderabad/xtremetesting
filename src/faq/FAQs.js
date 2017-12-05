import React from "react";
import FAQ from "./FAQ";

const FAQs = () => (
            <section className="container faqs" id="faq">
                <h1 className="section-heading">FAQ</h1>
                <FAQ question="I am new participant and would like to attend">
                    <p>
                         This is an Advanced session of XT, where the previous attenedees requested for an in-depth session of topics covered.
                    </p>
                    <p>
                         We will schedule the next basic XT session soon, watch out this space for more.
                    </p>
                <FAQ question="Who can attend?">
                    <p>
                        This session is open for ONLY previous XT attendees.
                    </p>
                    <p>
                        With this we also expect you to have atleast 3+ years of testing experience in manual and know the basics of automation testing.
                    </p>
                    <p>
                        It is NOT restricted to only Hyderabadis. If you can manage your own travel and stay, you are most welcome to apply.      
                    </p>
                    <p>
                        People who attended XtremeTesting already, please don't attend, we are repeating the same. Will send you updates on part 2 soon.
                    </p>
                </FAQ>
                <FAQ question="Why Free?">
                    <p>
                        Well, we have been active evangelists of these testing practices for many years. Today we are very happy to see that there is increased interest and awareness of these testing concepts across India and in Hyderabad as well.
                    </p>
                    <p>
                        However, we feel that there is a big gap in the understanding and appreciation of these practices. We would like to share our knowledge to build community around these practices.
                    </p>
                </FAQ>
                <FAQ question="Can I get my laptop?">
                    <p> We do provide laptops. If you wish to carry your personal laptop, please inform us as we shall share the instructions for you to setup the environment. </p>
                </FAQ>
            </section>
        );

export default FAQs;
