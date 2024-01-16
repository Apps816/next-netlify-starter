import React from "react";
import Image from "next/image";
import styles from './Hero.module.css'

class Hero01 extends React.Component {
    render() {
        return (
            <header className={`${styles.hero}`}>
                <Image src="/arena_sea_dogs_1920.png" alt="Your Image" className={styles['hero_image']} fill={true} />
                <div class="ui-page-padding">
                    <div class="ui-container-large">
                        <div class="ui-padding-vertical-xhuge">
                            <div class="w-layout-grid ui-heroheader01_component">
                                <div class="ui-heroheader01_content">
                                    <h1 class="ui-heading-xlarge">People who care about your growth</h1>
                                    <div class="ui-space-small"></div>
                                    <div class="ui-max-width-medium">
                                        <div class="ui-text-size-xlarge">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</div>
                                    </div>
                                    <div class="ui-space-large"></div>
                                    <div class="ui-button-wrapper max-width-full-mobile-landscape">
                                        <a href="#" class="ui-button ">
                                            <div>Sign up</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </header >
        );
    }
}

export default Hero01;
