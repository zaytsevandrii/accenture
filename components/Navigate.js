import React, { useState } from "react"
import StylesNav from "../styles/Navigate.module.scss"
import Meta from "./Meta"
const Navigate = ({ children }) => {
    const [insights,setInsights] = useState(false)
    const changeState = ()=>{
        setInsights(!insights)
    }
    return (
        <>
        <Meta/>

            <div className={StylesNav.navbar}>
                <div className={StylesNav.imgCont}>
                    <img src='https://www.accenture.com/t20180820T080700Z__w__/gb-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.png' alt="" />
                </div>
                <div className={StylesNav.subMenu}>
                    <div onClick={changeState}>Insights</div>
                    <div>Services</div>
                    <div>Industries</div>
                    <div>Careers</div>
                    <div>About Accenture</div>
                </div>
                
            </div>
            {insights&&
            <div className={StylesNav.insights}>Insights true</div>}
            <div>{children}</div>
        </>
    )
}

export default Navigate

{
    /* <div class="navbar-background">
                <script type="text/javascript">
                    var pageContext = '/sitecore/content/gb-en/Home/RedesignBucket/Homepage';
                </script>
                
                <div class="primary-nav" style="width: auto;">
                    
                    <div class="nav-icon-container hidden-lg" role="button" aria-expanded="false" data-linkcomponentname="top nav" data-analytics-content-type="nav/paginate" data-analytics-link-name="menu">
                        <div id="nav-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                    <div class="acn-logo-container hidden-sm hidden-xs">
                            <a href="/gb-en" class="gh-item acn-logo" data-rel="1c9ecbe3-57a3-4cfb-9afa-73c8c2ec1244" data-name="asset" data-linktype="logo" data-analytics-content-type="logo" data-linkcomponentname="top nav" data-analytics-link-name="accenture logo" data-cell="GH0" style="z-index: auto;">
                                <img src="//www.accenture.com/t20180820T080700Z__w__/gb-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG" alt="Accenture Home">
                            </a>

                    </div>

                    
                    <div id="nav-content-menu" class="nav-content panel-group" role="navigation">
                        <div class="primary-link-container" role="menubar" id="navigation-menu" aria-label="Main menu">
                                    <div class="nav-submenu panel layout-row  short" data-id="primaryLink1_Insights" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" role="none">
                                        
                                        <div class="gh-item nav-submenu-label" role="menuitem" data-target="#primaryLink1_Insights" data-parent="#navigation-menu" tabindex="0" aria-label="Insights" aria-haspopup="true" aria-expanded="false" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" data-cell="GH1" data-analytics-link-name="insights" data-analytics-content-type="nav/paginate">
                                            <span class="nav-submenu-label-text">
Insights                                            </span>
                                            <div class="expand-collapse-container visible-md visible-xs visible-sm">
                                                <span class="ion-chevron-down"></span>
                                            </div>
                                        </div>
                                        <div class="secondary-navs panel-collapse hidden" id="primaryLink1_Insights" style="padding-top: 0px; margin-top: 0px;">
                                            <div class="secondary-nav-menu" style="height: auto;">
                                                <div class="nav-item-links" style="width:100%;"><ul class="global-headerannounce col-custom secondaryCounter" data-lastrow="4"><li class="announce-heading">FEATURED CONTENT</li><li><a class="announce-article-title" href="https://www.accenture.com/gb-en/insights/voices" data-linkcomponentname="announcement nav" data-analytics-link-name="Voices of Change" data-analytics-content-type="nav/paginate" data-cell="B0">Voices of Change</a></li><li class="announce-desc">The path to 360° value starts here—featuring our most provocative thinking, extensive research and compelling stories of shared success.</li><li><a class="announce-article-title" href="https://www.accenture.com/us-en/about/company/war-in-ukraine-business-impact" data-linkcomponentname="announcement nav" data-analytics-link-name="War in Ukraine" data-analytics-content-type="nav/paginate" data-cell="D0">War in Ukraine</a></li><li class="announce-desc">Addressing the business and economic impact.</li></ul>
                                                        <ul class="no-l3 secondaryCounter col-sm-8" data-secondarylinkcount="15" role="menu" aria-label="Insights" data-lastrow="4">
                                                                                                                                <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/5g-index" aria-label="5G" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B1" data-analytics-link-name="5g" data-analytics-content-type="nav/paginate">5G</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/artificial-intelligence-summary-index" aria-label="Artificial Intelligence" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C1" data-analytics-link-name="artificial intelligence" data-analytics-content-type="nav/paginate">Artificial Intelligence</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/blockchain-index" aria-label="Blockchain Insights" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D1" data-analytics-link-name="blockchain" data-analytics-content-type="nav/paginate">Blockchain</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/cloud-insights" aria-label="Cloud Insights" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A2" data-analytics-link-name="cloud" data-analytics-content-type="nav/paginate">Cloud</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/song/customer-experience-index" aria-label="Customer Experience" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B2" data-analytics-link-name="customer experience" data-analytics-content-type="nav/paginate">Customer Experience</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/cyber-security-index" aria-label="Cybersecurity" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C2" data-analytics-link-name="cybersecurity" data-analytics-content-type="nav/paginate">Cybersecurity</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/industry-x-index" aria-label="Digital Engineering &amp; Manufacturing" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D2" data-analytics-link-name="digital engineering &amp; manufacturing" data-analytics-content-type="nav/paginate">Digital Engineering &amp; Manufacturing</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/digital-transformation-index" aria-label="Digital Transformation" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A3" data-analytics-link-name="digital transformation" data-analytics-content-type="nav/paginate">Digital Transformation</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/cloud/edge-computing-index" aria-label="Edge Computing" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B3" data-analytics-link-name="edge computing" data-analytics-content-type="nav/paginate">Edge Computing</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="https://www.accenture.com/us-en/insightsnew/future-workforce-index" aria-label="Future of Work" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C3" data-analytics-link-name="future of work" data-analytics-content-type="nav/paginate">Future of Work</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/supply-chain-operations/supply-chain-management-operations-index" aria-label="Supply Chain" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D3" data-analytics-link-name="supply chain" data-analytics-content-type="nav/paginate">Supply Chain</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/about/events/sustainability-cop26" aria-label="Sustainability" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A4" data-analytics-link-name="sustainability" data-analytics-content-type="nav/paginate">Sustainability</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/podcast-index" aria-label="Podcasts" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B4" data-analytics-link-name="podcasts" data-analytics-content-type="nav/paginate">Podcasts</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/insights/blogs-index" aria-label="Blogs" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C4" data-analytics-link-name="blogs" data-analytics-content-type="nav/paginate">Blogs</a> </li>

                                                        </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-submenu panel layout-column  short" data-id="primaryLink2_Services" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" role="none">
                                        
                                        <div class="gh-item nav-submenu-label" role="menuitem" data-target="#primaryLink2_Services" data-parent="#navigation-menu" tabindex="0" aria-label="Services" aria-haspopup="true" aria-expanded="false" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" data-cell="GH2" data-analytics-link-name="services" data-analytics-content-type="nav/paginate">
                                            <span class="nav-submenu-label-text">
Services                                            </span>
                                            <div class="expand-collapse-container visible-md visible-xs visible-sm">
                                                <span class="ion-chevron-down"></span>
                                            </div>
                                        </div>
                                        <div class="secondary-navs panel-collapse hidden" id="primaryLink2_Services" style="padding-top: 0px; margin-top: 0px;">
                                            <div class="secondary-nav-menu" style="height: auto;">
                                                <div class="nav-item-links" style="width:100%;">
                                                        <ul class="no-l3   col-sm-12 secondaryCounter" data-secondarylinkcount="25" role="menu" aria-label="Services" data-lastrow="5">
                                                                                                                                <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/technology/application-services" aria-label="Application Services" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A0" data-analytics-link-name="application services" data-analytics-content-type="nav/paginate">Application Services</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/ai-artificial-intelligence-index" aria-label="Artificial Intelligence" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B0" data-analytics-link-name="artificial intelligence" data-analytics-content-type="nav/paginate">Artificial Intelligence</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/intelligent-automation-index" aria-label="Automation" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C0" data-analytics-link-name="automation" data-analytics-content-type="nav/paginate">Automation</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/business-process-outsourcing-index" aria-label="Business Process Outsourcing" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D0" data-analytics-link-name="business process outsourcing" data-analytics-content-type="nav/paginate">Business Process Outsourcing</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/about/strategy-index" aria-label="Business Strategy" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A1" data-analytics-link-name="business strategy" data-analytics-content-type="nav/paginate">Business Strategy</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/talent-organization-human-potential-index" aria-label="Talent &amp; Organization / Human Potential" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B1" data-analytics-link-name="change management" data-analytics-content-type="nav/paginate">Change Management</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/cloud/services-index" aria-label="Cloud Services" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C1" data-analytics-link-name="cloud" data-analytics-content-type="nav/paginate">Cloud</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/about/song-company-index" aria-label="Accenture Interactive" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D1" data-analytics-link-name="customer experience" data-analytics-content-type="nav/paginate">Customer Experience</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/data-analytics-index" aria-label="Data &amp; Analytics" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A2" data-analytics-link-name="data &amp; analytics" data-analytics-content-type="nav/paginate">Data &amp; Analytics</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/song/commerce-transformation" aria-label="Digital Commerce" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B2" data-analytics-link-name="digital commerce" data-analytics-content-type="nav/paginate">Digital Commerce</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/digital-engineering-manufacturing-index" aria-label="Digital Engineering &amp; Manufacturing" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C2" data-analytics-link-name="digital engineering &amp; manufacturing" data-analytics-content-type="nav/paginate">Digital Engineering &amp; Manufacturing</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/technology/ecosystem-services" aria-label="Ecosystem Services" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D2" data-analytics-link-name="ecosystem services" data-analytics-content-type="nav/paginate">Ecosystem Services</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/cfo-and-enterprise-value-index" aria-label="CFO and Enterprise Value" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A3" data-analytics-link-name="finance consulting" data-analytics-content-type="nav/paginate">Finance Consulting</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/cloud/services/infrastructure-index" aria-label="Infrastructure" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B3" data-analytics-link-name="infrastructure" data-analytics-content-type="nav/paginate">Infrastructure</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/song/marketing-transformation" aria-label="Marketing Transformation" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C3" data-analytics-link-name="marketing" data-analytics-content-type="nav/paginate">Marketing</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/mergers-acquisitions-index" aria-label="Mergers &amp; Acquisitions (M&amp;A)" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D3" data-analytics-link-name="mergers &amp; acquisitions (m&amp;a)" data-analytics-content-type="nav/paginate">Mergers &amp; Acquisitions (M&amp;A)</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/metaverse-index" aria-label="Metaverse" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A4" data-analytics-link-name="metaverse" data-analytics-content-type="nav/paginate">Metaverse</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/operating-models-index" aria-label="Operating Models" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B4" data-analytics-link-name="operating models" data-analytics-content-type="nav/paginate">Operating Models</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/security-index" aria-label="Security" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C4" data-analytics-link-name="security" data-analytics-content-type="nav/paginate">Security</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/supply-chain-management-and-operations-index" aria-label="Supply Chain Management" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D4" data-analytics-link-name="supply chain management" data-analytics-content-type="nav/paginate">Supply Chain Management</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/sustainability-index" aria-label="Sustainability" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A5" data-analytics-link-name="sustainability" data-analytics-content-type="nav/paginate">Sustainability</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/consulting/technology-consulting" aria-label="Technology Consulting" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B5" data-analytics-link-name="technology consulting" data-analytics-content-type="nav/paginate">Technology Consulting</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/technology-innovation-index" aria-label="Technology Innovation" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C5" data-analytics-link-name="technology innovation" data-analytics-content-type="nav/paginate">Technology Innovation</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/services/zero-based-budgeting-index" aria-label="Zero-Based Transformation" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D5" data-analytics-link-name="zero-based transformation" data-analytics-content-type="nav/paginate">Zero-Based Transformation</a> </li>

                                                        </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-submenu panel layout-row  short" data-id="primaryLink3_Industries" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" role="none">
                                        
                                        <div class="gh-item nav-submenu-label" role="menuitem" data-target="#primaryLink3_Industries" data-parent="#navigation-menu" tabindex="0" aria-label="Industries" aria-haspopup="true" aria-expanded="false" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" data-cell="GH3" data-analytics-link-name="industries" data-analytics-content-type="nav/paginate">
                                            <span class="nav-submenu-label-text">
Industries                                            </span>
                                            <div class="expand-collapse-container visible-md visible-xs visible-sm">
                                                <span class="ion-chevron-down"></span>
                                            </div>
                                        </div>
                                        <div class="secondary-navs panel-collapse hidden" id="primaryLink3_Industries" style="padding-top: 0px; margin-top: 0px;">
                                            <div class="secondary-nav-menu" style="height: auto;">
                                                <div class="nav-item-links" style="width:100%;">
                                                        <ul class="no-l3   col-sm-12 secondaryCounter" data-secondarylinkcount="20" role="menu" aria-label="Industries" data-lastrow="4">
                                                                                                                                <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/aerospace-defense-index" aria-label="Aerospace and Defense" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A0" data-analytics-link-name="aerospace and defense" data-analytics-content-type="nav/paginate">Aerospace and Defense</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/automotive-index" aria-label="Automotive" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B0" data-analytics-link-name="automotive" data-analytics-content-type="nav/paginate">Automotive</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/banking-index" aria-label="Banking" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C0" data-analytics-link-name="banking" data-analytics-content-type="nav/paginate">Banking</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/capital-markets-index" aria-label="Capital Markets" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D0" data-analytics-link-name="capital markets" data-analytics-content-type="nav/paginate">Capital Markets</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/chemicals-index" aria-label="Chemicals" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A1" data-analytics-link-name="chemicals" data-analytics-content-type="nav/paginate">Chemicals</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/communications-and-media-index" aria-label="Communications and Media" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B1" data-analytics-link-name="communications and media" data-analytics-content-type="nav/paginate">Communications and Media</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/consumer-goods-and-services-index" aria-label="Consumer Goods and Services" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C1" data-analytics-link-name="consumer goods and services" data-analytics-content-type="nav/paginate">Consumer Goods and Services</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/energy-index" aria-label="Energy" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D1" data-analytics-link-name="energy" data-analytics-content-type="nav/paginate">Energy</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/health-index" aria-label="Health" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A2" data-analytics-link-name="health" data-analytics-content-type="nav/paginate">Health</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/high-tech-index" aria-label="High Tech" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B2" data-analytics-link-name="high tech" data-analytics-content-type="nav/paginate">High Tech</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/industrial-equipment-index" aria-label="Industrial" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C2" data-analytics-link-name="industrial" data-analytics-content-type="nav/paginate">Industrial</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/insurance-index" aria-label="Insurance" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D2" data-analytics-link-name="insurance" data-analytics-content-type="nav/paginate">Insurance</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/life-sciences-index" aria-label="Life Sciences" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A3" data-analytics-link-name="life sciences" data-analytics-content-type="nav/paginate">Life Sciences</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/natural-resources-index" aria-label="Natural Resources" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B3" data-analytics-link-name="natural resources" data-analytics-content-type="nav/paginate">Natural Resources</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/public-service-index" aria-label="Public Service" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C3" data-analytics-link-name="public service" data-analytics-content-type="nav/paginate">Public Service</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/retail-index" aria-label="Retail" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="D3" data-analytics-link-name="retail" data-analytics-content-type="nav/paginate">Retail</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/software-and-platforms-index" aria-label="Software and Platforms" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="A4" data-analytics-link-name="software and platforms" data-analytics-content-type="nav/paginate">Software and Platforms</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/travel-index" aria-label="Travel" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="B4" data-analytics-link-name="travel" data-analytics-content-type="nav/paginate">Travel</a> </li>
                                                                    <li class="col-sm-3 secondary-item" data-analytics-module-name="secondary nav" role="none"><a href="/gb-en/industries/utilities-index" aria-label="Utilities" data-linkcomponentname="Secondary nav" role="menuitem" data-cell="C4" data-analytics-link-name="utilities" data-analytics-content-type="nav/paginate">Utilities</a> </li>

                                                        </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-submenu panel layout-row  short" data-id="primaryLink4_Careers" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" role="none">
                                        
                                        <div class="gh-item nav-submenu-label" role="menuitem" data-target="#primaryLink4_Careers" data-parent="#navigation-menu" tabindex="0" aria-label="Careers" aria-haspopup="true" aria-expanded="false" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" data-cell="GH4" data-analytics-link-name="careers" data-analytics-content-type="nav/paginate">
                                            <span class="nav-submenu-label-text">
Careers                                            </span>
                                            <div class="expand-collapse-container visible-md visible-xs visible-sm">
                                                <span class="ion-chevron-down"></span>
                                            </div>
                                        </div>
                                        <div class="secondary-navs panel-collapse hidden" id="primaryLink4_Careers" style="padding-top: 0px; margin-top: 0px;">
                                            <div class="secondary-nav-menu" style="height: auto;">
                                                <div class="nav-item-links" style="width:100%;">
                                                        <ul class="multiple-l3   col-sm-12 secondaryCounter" data-secondarylinkcount="4" role="menu" aria-label="Careers" data-lastrow="5">
                                                            <li class="first-secondary-item" data-analytics-module-name="secondary nav" role="none" style="height: 6.43em;">
                                                                <a href="/gb-en/careers" class="hidden-lg" data-linkcomponentname="secondary nav" role="menuitem" data-analytics-link-name="careers home" data-analytics-content-type="nav/paginate"> Careers Home</a>
                                                                <span class="col-sm-3 visible-lg secondary-hyperlink" role="none">
                                                                    <a href="/gb-en/careers" class="overview-link cta-arrow hidden-md hidden-sm hidden-xs displayInline" data-linkcomponentname="secondary nav" role="menuitem" data-analytics-link-name="careers home" data-analytics-content-type="nav/paginate"> Careers Home</a>
                                                                </span>
                                                                    <br class="hidden-lg">
                                                                    <a href="/gb-en/careers/jobsearch" class="hidden-lg" data-linkcomponentname="secondary nav" role="menuitem" data-analytics-link-name="search jobs" data-analytics-content-type="nav/paginate"> Search Jobs </a>
                                                                    <span class="second-secondary-item col-sm-3 visible-lg secondary-hyperlink search-jobslink" data-analytics-module-name="secondary nav" role="none">
                                                                        <a href="/gb-en/careers/jobsearch" class="overview-link cta-arrow hidden-md hidden-sm hidden-xs displayInline" data-linkcomponentname="secondary nav" role="menuitem" data-analytics-link-name="search jobs" data-analytics-content-type="nav/paginate"> Search Jobs </a>
                                                                    </span>
                                                                                                                            </li>
                                                                                                                                        <li class="col-sm-12 secondary-item" data-tertiary="careers-joinus" data-linkcomponentname="top nav" role="none">
                                                                                <span aria-label="Join Us" class="secondary-item-text">Join Us</span>
                                                                                <div class="next-menu-container">
                                                                                    <span class="ion-ios-arrow-right hidden-lg"></span>
                                                                                </div>

                                                                                
                                                                                <ul class="tertiary-nav-container col-sm-12 hidden-xs hidden-sm hidden-md" data-tertiarycount="7" data-analytics-module-name="secondary nav" role="menu">
                                                                                                                                                                            <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/life-at-accenture/leadership-careers" aria-label="Executive Leaders" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A1" data-analytics-link-name="executive leaders" data-analytics-content-type="nav/paginate">Executive Leaders</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/life-at-accenture/experienced" aria-label="Experienced Professionals" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B1" data-analytics-link-name="experienced professionals" data-analytics-content-type="nav/paginate">Experienced Professionals</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/local/graduate-home" aria-label="Students" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C1" data-analytics-link-name="students" data-analytics-content-type="nav/paginate">Students</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/life-at-accenture/training-counseling" aria-label="Training &amp; Development" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D1" data-analytics-link-name="training &amp; development" data-analytics-content-type="nav/paginate">Training &amp; Development</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/life-at-accenture/work-environment" aria-label="Work Environment" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A2" data-analytics-link-name="work environment" data-analytics-content-type="nav/paginate">Work Environment</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/local/advanced-technology-centre" aria-label="Advanced Technology Centre" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B2" data-analytics-link-name="advanced technology centre" data-analytics-content-type="nav/paginate">Advanced Technology Centre</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/local/leaving-armed-forces" aria-label="Ex-Military Professionals" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C2" data-analytics-link-name="ex-military professionals" data-analytics-content-type="nav/paginate">Ex-Military Professionals</a></li>

                                                                                </ul>
                                                                            </li>
                                                                            <li class="col-sm-12 secondary-item" data-tertiary="careers-explorejobs" data-linkcomponentname="top nav" role="none">
                                                                                <span aria-label="Explore Jobs" class="secondary-item-text">Explore Jobs</span>
                                                                                <div class="next-menu-container">
                                                                                    <span class="ion-ios-arrow-right hidden-lg"></span>
                                                                                </div>

                                                                                
                                                                                <ul class="tertiary-nav-container col-sm-12 hidden-xs hidden-sm hidden-md" data-tertiarycount="9" data-analytics-module-name="secondary nav" role="menu">
                                                                                        <li class="col-sm-12 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/areas-of-interest/areas-expertise" aria-label="Search Jobs by Areas of Expertise" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A3" data-analytics-link-name="search jobs by areas of expertise" data-analytics-content-type="nav/paginate">Search Jobs by Areas of Expertise</a></li>
                                                                                                                                                                            <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/consulting-careers" aria-label="Consulting Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B3" data-analytics-link-name="consulting jobs" data-analytics-content-type="nav/paginate">Consulting Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/corporate-functions-careers" aria-label="Corporate Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C3" data-analytics-link-name="corporate jobs" data-analytics-content-type="nav/paginate">Corporate Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/interactive-careers" aria-label="Digital Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D3" data-analytics-link-name="digital jobs" data-analytics-content-type="nav/paginate">Digital Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/operations-careers" aria-label="Operations Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A4" data-analytics-link-name="operations jobs" data-analytics-content-type="nav/paginate">Operations Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/strategy-careers" aria-label="Strategy Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B4" data-analytics-link-name="strategy jobs" data-analytics-content-type="nav/paginate">Strategy Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/technology-careers" aria-label="Technology Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C4" data-analytics-link-name="technology jobs" data-analytics-content-type="nav/paginate">Technology Jobs</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/local/technology-returners-programme" aria-label="Technology Returners Programme" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D4" data-analytics-link-name="technology returners programme" data-analytics-content-type="nav/paginate">Technology Returners Programme</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/careers/explore-careers/area-of-interest/cybersecurity-careers" aria-label="Cybersecurity Jobs" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A5" data-analytics-link-name="cybersecurity jobs" data-analytics-content-type="nav/paginate">Cybersecurity Jobs</a></li>

                                                                                </ul>
                                                                            </li>

                                                        </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-submenu panel layout-row  short" data-id="primaryLink5_AboutAccenture" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" role="none">
                                        
                                        <div class="gh-item nav-submenu-label" role="menuitem" data-target="#primaryLink5_AboutAccenture" data-parent="#navigation-menu" tabindex="0" aria-label="About Accenture" aria-haspopup="true" aria-expanded="false" data-linkcomponentname="primary nav" data-analytics-module-name="primary nav" data-cell="GH5" data-analytics-link-name="about accenture" data-analytics-content-type="nav/paginate">
                                            <span class="nav-submenu-label-text">
About Accenture                                            </span>
                                            <div class="expand-collapse-container visible-md visible-xs visible-sm">
                                                <span class="ion-chevron-down"></span>
                                            </div>
                                        </div>
                                        <div class="secondary-navs panel-collapse hidden" id="primaryLink5_AboutAccenture" style="padding-top: 0px; margin-top: 0px;">
                                            <div class="secondary-nav-menu" style="height: auto;">
                                                <div class="nav-item-links" style="width:100%;">
                                                        <ul class="multiple-l3   col-sm-12 secondaryCounter" data-secondarylinkcount="4" role="menu" aria-label="About Accenture" data-lastrow="5">
                                                                                                                                        <li class="col-sm-12 secondary-item" data-tertiary="aboutaccenture-whoweare" data-linkcomponentname="top nav" role="none">
                                                                                <span aria-label="Who We Are" class="secondary-item-text">Who We Are</span>
                                                                                <div class="next-menu-container">
                                                                                    <span class="ion-ios-arrow-right hidden-lg"></span>
                                                                                </div>

                                                                                
                                                                                <ul class="tertiary-nav-container col-sm-12 hidden-xs hidden-sm hidden-md" data-tertiarycount="8" data-analytics-module-name="secondary nav" role="menu">
                                                                                                                                                                            <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/company-index" aria-label="About Accenture" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A0" data-analytics-link-name="about accenture" data-analytics-content-type="nav/paginate">About Accenture</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/leadership/leadership-index" aria-label="Leadership" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B0" data-analytics-link-name="leadership" data-analytics-content-type="nav/paginate">Leadership</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/company/how-we-serve-index" aria-label="How We Work with Clients" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C0" data-analytics-link-name="how we work with clients" data-analytics-content-type="nav/paginate">How We Work with Clients</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/company/all-stories" aria-label="Case Studies" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D0" data-analytics-link-name="case studies" data-analytics-content-type="nav/paginate">Case Studies</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="https://newsroom.accenture.com" aria-label="Newsroom" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A1" data-analytics-link-name="newsroom" data-analytics-content-type="nav/paginate">Newsroom</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="https://investor.accenture.com/" aria-label="Investor Relations" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B1" data-analytics-link-name="investor relations" data-analytics-content-type="nav/paginate">Investor Relations</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/inclusion-diversity-index" aria-label="Inclusion &amp; Diversity" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C1" data-analytics-link-name="inclusion &amp; diversity" data-analytics-content-type="nav/paginate">Inclusion &amp; Diversity</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/sustainability/sustainability-value-promise" aria-label="Sustainability" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D1" data-analytics-link-name="sustainability" data-analytics-content-type="nav/paginate">Sustainability</a></li>

                                                                                </ul>
                                                                            </li>
                                                                            <li class="col-sm-12 secondary-item" data-tertiary="aboutaccenture-howwe'reorganized" data-linkcomponentname="top nav" role="none">
                                                                                <span aria-label="How We're Organized" class="secondary-item-text">How We're Organized</span>
                                                                                <div class="next-menu-container">
                                                                                    <span class="ion-ios-arrow-right hidden-lg"></span>
                                                                                </div>

                                                                                
                                                                                <ul class="tertiary-nav-container col-sm-12 hidden-xs hidden-sm hidden-md" data-tertiarycount="5" data-analytics-module-name="secondary nav" role="menu">
                                                                                                                                                                            <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/consulting-index" aria-label="Strategy &amp; Consulting" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A3" data-analytics-link-name="strategy &amp; consulting" data-analytics-content-type="nav/paginate">Strategy &amp; Consulting</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/accenture-song-index" aria-label="Song" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B3" data-analytics-link-name="song" data-analytics-content-type="nav/paginate">Song</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/technology-index" aria-label="Technology" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C3" data-analytics-link-name="technology" data-analytics-content-type="nav/paginate">Technology</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/operations-index" aria-label="Operations" data-linkcomponentname="secondary nav" role="menuitem" data-cell="D3" data-analytics-link-name="operations" data-analytics-content-type="nav/paginate">Operations</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/industry-x-index" aria-label="Industry X" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A4" data-analytics-link-name="industry x" data-analytics-content-type="nav/paginate">Industry X</a></li>

                                                                                </ul>
                                                                            </li>
                                                                            <li class="col-sm-12 secondary-item" data-tertiary="aboutaccenture-intheuk" data-linkcomponentname="top nav" role="none">
                                                                                <span aria-label="In the UK" class="secondary-item-text">In the UK</span>
                                                                                <div class="next-menu-container">
                                                                                    <span class="ion-ios-arrow-right hidden-lg"></span>
                                                                                </div>

                                                                                
                                                                                <ul class="tertiary-nav-container col-sm-12 hidden-xs hidden-sm hidden-md" data-tertiarycount="3" data-analytics-module-name="secondary nav" role="menu">
                                                                                                                                                                            <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/inclusion-diversity/uk-workforce" aria-label="Inclusion &amp; Diversity in the UK" data-linkcomponentname="secondary nav" role="menuitem" data-cell="A5" data-analytics-link-name="inclusion &amp; diversity in the uk" data-analytics-content-type="nav/paginate">Inclusion &amp; Diversity in the UK</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="https://newsroom.accenture.co.uk/" aria-label="Newsroom" data-linkcomponentname="secondary nav" role="menuitem" data-cell="B5" data-analytics-link-name="newsroom" data-analytics-content-type="nav/paginate">Newsroom</a></li>
                                                                                        <li class="col-sm-3 tertiary-item" role="none"><a href="/gb-en/about/corporate-citizenship-home" aria-label="Corporate Citizenship in the UK" data-linkcomponentname="secondary nav" role="menuitem" data-cell="C5" data-analytics-link-name="corporate citizenship in the uk" data-analytics-content-type="nav/paginate">Corporate Citizenship in the UK</a></li>

                                                                                </ul>
                                                                            </li>

                                                        </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                        </div>
                        
                    <div id="menuFooter" class="nav-contact-link visible-md visible-xs visible-sm">
                        
                                    <div class="footer-menu-utility-link-container"><a class="signInContactUs" href="/gb-en/about/contact-us" aria-label="Contact Us" data-linkcomponentname="top nav" data-analytics-link-name="contact us" data-analytics-content-type="cta">Contact Us</a></div>
                                                
                            <ul class="social-icons">
                                        <li><a href="https://www.linkedin.com/company/accenture-uk" target="_blank" rel="noopener" title="linkedin" class="ion-social-linkedin" aria-label="linkedin" data-linkcomponentname="top nav" data-analytics-link-name="linkedin" data-analytics-content-type="cta"><span style="display:none;">linkedin</span></a></li>
                                        <li><a href="https://twitter.com/AccentureUK" target="_blank" rel="noopener" title="twitter" class="ion-social-twitter" aria-label="twitter" data-linkcomponentname="top nav" data-analytics-link-name="twitter" data-analytics-content-type="cta"><span style="display:none;">twitter</span></a></li>
                                        <li><a href="https://www.facebook.com/AccentureUK" target="_blank" rel="noopener" title="facebook" class="ion-social-facebook" aria-label="facebook" data-linkcomponentname="top nav" data-analytics-link-name="facebook" data-analytics-content-type="cta"><span style="display:none;">facebook</span></a></li>
                                        <li><a href="https://www.instagram.com/accenture_uk" target="_blank" rel="noopener" title="instagram-outline" class="ion-social-instagram-outline" aria-label="instagram" data-linkcomponentname="top nav" data-analytics-link-name="instagram-outline" data-analytics-content-type="cta"><span style="display:none;">instagram-outline</span></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCpjSEVE3cCfHsg9gC4e_0RA" target="_blank" rel="noopener" title="youtube" class="ion-social-youtube" aria-label="youtube" data-linkcomponentname="top nav" data-analytics-link-name="youtube" data-analytics-content-type="cta"><span style="display:none;">youtube</span></a></li>

                            </ul>

                    </div>
                    </div>
                    
                    <div class="nav-content panel-group tertiary-nav-container" id="tertiaryNav" style="display: none;">
                        <div id="tertiary-block">
                            <div class="nav-submenu-label">
                                <div class="nav-submenu-label-L3 visible-xs visible-sm visible-md" data-linkcomponentname="top nav" data-analytics-link-name="return to previous" data-analytics-content-type="nav/paginate">
                                    <p class="sr-only" id="return-to-previous-button">return to previous button</p>
                                    <div class="back-menu-container-gh " aria-labelledby="return-to-previous-button">
                                        <span class="ion-chevron-left"></span>
                                    </div>
                                    <span class="tertiary-title">NAN</span>
                                </div>
                                <div id="tertiaryListContainer" class="nav-item-links col-lg-5">
                                    
                                </div>
                            </div>
                        </div>
                        
                            <div id="second-contact-link" class="nav-contact-link visible-xs visible-sm visible-md"><div class="footer-menu-utility-link-container"><a class="signInContactUs" href="/gb-en/about/contact-us" aria-label="Contact Us" data-linkcomponentname="top nav" data-analytics-link-name="contact us" data-analytics-content-type="cta">Contact Us</a></div><ul class="social-icons">
                                        <li><a href="https://www.linkedin.com/company/accenture-uk" target="_blank" rel="noopener" title="linkedin" class="ion-social-linkedin" aria-label="linkedin" data-linkcomponentname="top nav" data-analytics-link-name="linkedin" data-analytics-content-type="cta"><span style="display:none;">linkedin</span></a></li>
                                        <li><a href="https://twitter.com/AccentureUK" target="_blank" rel="noopener" title="twitter" class="ion-social-twitter" aria-label="twitter" data-linkcomponentname="top nav" data-analytics-link-name="twitter" data-analytics-content-type="cta"><span style="display:none;">twitter</span></a></li>
                                        <li><a href="https://www.facebook.com/AccentureUK" target="_blank" rel="noopener" title="facebook" class="ion-social-facebook" aria-label="facebook" data-linkcomponentname="top nav" data-analytics-link-name="facebook" data-analytics-content-type="cta"><span style="display:none;">facebook</span></a></li>
                                        <li><a href="https://www.instagram.com/accenture_uk" target="_blank" rel="noopener" title="instagram-outline" class="ion-social-instagram-outline" aria-label="instagram" data-linkcomponentname="top nav" data-analytics-link-name="instagram-outline" data-analytics-content-type="cta"><span style="display:none;">instagram-outline</span></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCpjSEVE3cCfHsg9gC4e_0RA" target="_blank" rel="noopener" title="youtube" class="ion-social-youtube" aria-label="youtube" data-linkcomponentname="top nav" data-analytics-link-name="youtube" data-analytics-content-type="cta"><span style="display:none;">youtube</span></a></li>

                            </ul></div>
                    </div>
                    
                        <div class="acn-logo-container hidden-lg hidden-md">
                            <a href="/gb-en" class="acn-logo" title="Accenture Home" data-rel="1c9ecbe3-57a3-4cfb-9afa-73c8c2ec1244" data-name="asset" data-linktype="logo" data-analytics-content-type="logo" tabindex="0" data-linkcomponentname="top nav" data-analytics-link-name="accenture logo">
                                <img src="//www.accenture.com/t20180820T080700Z__w__/gb-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG" alt="Accenture Home">
                            </a>
                        </div>

                </div>
                
            <div class="utility-nav">
                
                    <div class="gh-item search-icon-container" data-analytics-link-name="initiated search - click/tap" data-analytics-content-type="search activity" data-cell="GH6">
                        <a class="ion-ios-search serp" href="/gb-en/search/results" aria-label="Search accenture.com"></a>
                    </div>

                                
                <button id="country-language-selector" class="gh-item country-select-cont" aria-controls="location-recommendation" aria-expanded="false" aria-haspopup="listbox" data-linktype="language" data-analytics-content-type="language" tabindex="0" aria-describedby="current-country" aria-label="Country and language selector" data-linkcomponentname="top nav" data-cell="GH7">
                    <span class="country-icon">
                        <img src="/Content/images/flags/UnitedKingdom.jpg" alt="United Kingdom" class="country-flag pull-left">
                        <span class="ion-android-arrow-dropdown"></span>
                    </span>
                </button>
                <p class="sr-only" id="current-country">Current Country: United Kingdom </p>
                <div class="country-form" style="z-index: 1;">
                    <span class="arrow-up"></span>
                    <div class="input-group" style="height:1em; padding:0px;">
                        
                        
                    </div>
                    <div id="location-recommendation" class="col-xs-12" style="height:410px !important"></div>
                </div>
            </div>
            </div> */
}
