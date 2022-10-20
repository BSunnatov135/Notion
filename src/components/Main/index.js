import styles from './main.module.css'
import FlexItem from '../FlexItem'
import { topitems} from '../../mock-data/items'
import Animation from '../../images/Screenshot 2022-07-08 at 15.25.48.png'

function Main () {
    return (
        <div className={styles.main}>
            <section className={styles.WorkspaceContainer}>
                <article className={styles.WorkspaceArticle}>
                    <div className={styles.WorkspaceArticleItem}>
                        <div className={styles.WorkspaceImage}><img className={styles.WorkspaceImage} src='https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'></img></div>
                    </div>
                    <div className={styles.WorkspaceArticleItem}>
                        <h1 className={styles.WorkspaceTitle}>One workspace. <br/>Every team.</h1>
                        <div className={styles.WorkspaceArticleParagraph}>We’re more than a doc. Or a table. Customize Notion to work the way you do.</div>
                        <div className={styles.WorkspaceButton}>
                            <a className={styles.WorkspaceButtonLink}>
                                <div className={styles.WorkspaceButonContent}>Try Notion free</div>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
            <section className={styles.GalleryContainer}>
            {topitems.map(latest=>(
                        <FlexItem key={latest.id} illustration={latest.illustration} title={latest.title} text={latest.text} image={latest.image}/>
                    ))}
            </section>
            <hr/>
            <section className={styles.GalleryContainer}>
                <div className={styles.EndlesContainer}>
                    <div className={styles.EndlessRight}> 
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/bookshelf-spot.png'></img>
                    </div>
                    <div className={styles.EndlessLeft}>
                        <div className={styles.EndlessLeftText}>
                            <h2 className={styles.EndlessTitle}>
                                Built for Enless Uses <br/> Across all teams.
                            </h2>
                            <div className={styles.WorkspaceArticleParagraph}>Notion solves problems common and unique to every team. These are just a few.</div>
                        </div>
                        <div className={styles.WorkspaceButton}>
                            <a className={styles.WorkspaceButtonLink}>
                                <div className={styles.WorkspaceButonContent}>Try Notion free</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.AnimationFlexContainer}>
                    <div className={styles.AnimationFlex}>
                        <div className={styles.AnimationRight}>
                            <img src={Animation}></img>
                        </div>
                        <div className={styles.AnimationLeft}>
                            <nav className={styles.AnimationNav}>
                                <button className={styles.AnimatinNavItem}>Company home</button>
                                <button className={styles.AnimatinNavItem}>Roadmap</button>
                                <button className={styles.AnimatinNavItem}>Design docs</button>
                                <button className={styles.AnimatinNavItem}>Engineering wiki</button>
                                <button className={styles.AnimatinNavItem}>Meeting notes</button>
                                <button className={styles.AnimatinNavItem}>Website publishing</button>
                            </nav>
                            <div className={styles.LogoWrapper}>
                            <p>Used by teamd at</p>
                            <div className={styles.LogoFlex}>
                                <img src='https://www.notion.so/front-static/shared/logos/color/branch.png'></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className={styles.GalleryContainer}>
                <div className={styles.EndlesContainer}>
                    <div className={styles.EndlessRight}> 
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/blocks-spot.png'></img>
                    </div>
                    <div className={styles.EndlessLeft}>
                        <div className={styles.EndlessLeftText}>
                            <h2 className={styles.EndlessTitle}>
                            Start with a template. <br/>Modify it however you need.
                            </h2>
                            <div className={styles.WorkspaceArticleParagraph}>Choose from thousands of free, pre-built setups — for work and life.</div>
                        </div>
                        <div className={styles.WorkspaceButton}>
                            <a className={styles.WorkspaceButtonLink}>
                                <div className={styles.WorkspaceButonContent_1}>See all templates</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.FlexContainer}>
                    <figure>
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/3rgtX4i8gix6nmIZGPXx10/3b828a7354b27fe894ae5ad145bc44e8/Hero.jpg'></img>
                        <figcaption>
                            Company home
                        </figcaption>
                    </figure>
                    <figure>
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4436AdRCPMLYAHECuw6y3/0329c1cf2f7a3f0eca8ba1156774bf63/Hero.png'></img>
                        <figcaption>
                            Roadmap
                        </figcaption>
                    </figure>
                    <figure>
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/2tpiTr9meibfgSPFKexFjs/05128b39df66d497e026489e86ef826a/Hero.jpg'></img>
                        <figcaption>
                            Meeting notes
                        </figcaption>
                    </figure>
                </div>
            </section>
            <hr/>
            <section className={styles.GalleryContainer}>
                <div className={styles.EndlesContainer}>
                    <div className={styles.EndlessRight}> 
                        <img style={{width:'360px'}} src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/illustrations/teamwork.png'></img>
                    </div>
                    <div className={styles.EndlessLeft}>
                        <div className={styles.EndlessLeftText}>
                            <h2 className={styles.EndlessTitle}>
                            SUsed by the world’s most innovative teams
                            </h2>
                        </div>
                        <div className={styles.WorkspaceButton}>
                            <a className={styles.WorkspaceButtonLink}>
                                <div className={styles.WorkspaceButonContent_1}>Read all customer stories</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.ThreeFlex}>
                    <div className={styles.ThreeFlexWrapper}>
                        <div className={styles.ThreeItem}>
                            <div className={styles.ThreeLogo}>
                                <img src='https://www.notion.so/front-static/shared/logos/color/match-v2.png'></img>
                            </div>
                            <blockquote>Notion is a workspace that adapts to your needs. It’s as minimal or as powerful as you need it to be.  
                            </blockquote>
                            <div className={styles.PersonWrap}>
                                <div className={styles.PersonFlex}>
                                    <div className={styles.PersonIcon}>
                                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/rahim-makani.png'></img>
                                    </div>
                                    <div>
                                        <h2 className={styles.PersonTitle}>Rahim Makani</h2>
                                        <p className={styles.Personp}>Director of Product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ThreeItem}>
                            <div className={styles.ThreeLogo}>
                                <img src='https://www.notion.so/front-static/shared/logos/color/loom.png'></img>
                            </div>
                            <blockquote>Notion continues to be the easiest way to get information centralized somewhere and shout it out to someone else. For us, that’s extremely important because half our team is remote.  
                            </blockquote>
                            <div className={styles.PersonWrap}>
                                <div className={styles.PersonFlex}>
                                    <div className={styles.PersonIcon}>
                                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/vinay-hiremath.png'></img>
                                    </div>
                                    <div>
                                        <h2 className={styles.PersonTitle}>Vinay Hiremath</h2>
                                        <p className={styles.Personp}>Co-founder and Head of Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ThreeItem}>
                            <div className={styles.ThreeLogo}>
                                <img src='https://www.notion.so/front-static/shared/logos/color/figma.png'></img>
                            </div>
                            <blockquote>Notion is a workspace that adapts to your needs. It’s as minimal or as powerful as you need it to be.  
                            </blockquote>
                            <div className={styles.PersonWrap}>
                                <div className={styles.PersonFlex}>
                                    <div className={styles.PersonIcon}>
                                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/marie-szuts.png'></img>
                                    </div>
                                    <div>
                                        <h2 className={styles.PersonTitle}>Maire Szuts</h2>
                                        <p className={styles.Personp}>Head of People Ops</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className={styles.GalleryContainer}>
                <div className={styles.TodayContainer}>
                    <div className={styles.AbsoluteIllustration}>
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=384,quality=100/front-static/pages/product/sitting-character.png'></img>
                    </div>
                    <div className={styles.TodayText}>
                        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png'></img>
                        <h2>Try Notion today</h2>
                        <p>Get started for free<br/>Add your whole team as your needs grow</p>
                        <a className={styles.WorkspaceButtonLink}>
                    <div className={styles.WorkspaceButonContent}>Try Notion free</div>
                    </a>
                    </div>
                    
                    
                        
                </div>
            </section>
        </div>
    )
}
export default Main