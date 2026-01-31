/**
 * KATENRAKU - Core Logic (Fixed & Cleaned)
 */

// ==========================================
// 1. TRANSLATIONS DATA
// ==========================================
const translations = {
    jp: {
        link_company: "会社概要",
        link_services: "事業内容",
        nav_contact: "お問い合わせ",
        hero_badge: "Global Business Solutions",
        hero_title: "境界を越え、<br><span class='gradient-text'>未来を繋ぐ。</span>",
        hero_desc: "不動産からテクノロジー、教育まで。<br>多角的な視点で企業のポテンシャルを最大化します。",
        service_title: "事業内容",
        prop_title: "赤坂・六本木・青山エリア<br>次世代オフィス空間",
        prop_desc: "赤坂・六本木・青山エリアを自在に行き来できる都心の中心地に、洗練された次世代オフィス空間が誕生。ビジネスの加速をサポートする環境を提供します。",
        feat_1: "駅近アクセス",
        feat_2: "会議室・ラウンジ",
        feat_3: "家具・ネット完備",
        feat_4: "個別空調・開閉窓",
        biz_consult_title: "経営コンサルティング",
        biz_consult_desc: "起業・経営コンサル、海外企業の日本市場参入および日本企業の海外展開サポート。",
        biz_media_title: "メディア・広告",
        biz_media_desc: "インターネット、電子出版、映像等の企画制作および各種メディアを活用した広告事業。",
        biz_edu_title: "教育・人材派遣",
        biz_edu_desc: "企業研修、セミナー開催、および教育人材・労働者の派遣・マネジメント業務。",
        biz_ip_title: "著作権管理",
        biz_ip_desc: "著作権、出版権、翻訳権等の管理、売買および出版に関する業務。",
        biz_travel_title: "旅行・手配",
        biz_travel_desc: "国内外の宿泊施設および鉄道・航空機・船舶・タクシー等の手配業務。",
        biz_acc_title: "経理代行",
        biz_acc_desc: "コンピュータによる委託会計計算業務および経理事務の管理代行。",
        link_privacy: "プライバシーポリシー",

        // COMPANY PAGE
        page_company_title: "COMPANY",
        page_company_subtitle: "会社概要",
        th_name: "商号",
        th_address: "本社",
        th_est: "設立",
        th_tel: "電話番号",
        th_biz: "事業内容",
        co_name_val: "株式会社KATENRAKU",
        co_address_val: "〒107-0052 東京都港区赤坂6丁目19番46号",
        co_est_val: "平成29年12月8日",
        biz_list_1: "1. 国内外における不動産の売買、仲介、賃貸、管理及び不動産コンサルティング業務",
        biz_list_2: "2. 企業向けの起業と経営のコンサルティング、海外企業の日本市場参入並びに日本企業の海外市場参入のサポート業務",
        biz_list_3: "3. インターネット、電子出版、映像、印刷物等の各種メディアの広告、企画制作及び各種メディアを活用した教育研修事業並びに通信販売事業",
        biz_list_4: "4. 企業経営と企業及び一般社会人の人材育成のための研修、指導講演会、セミナー及びイベントの開催、教育事業並びに、インストラクターの派遣",
        biz_list_5: "5. 著作権、出版権、翻訳権等の管理、売買及び出版に関する業務",
        biz_list_6: "6. 教育人材派遣に関するマネジメントサービス及び労働者派遣事業に関する業務",
        biz_list_7: "7. 海外国内旅行に係る宿泊施設及び鉄道・航空機・船舶・タクシー等の運送機関の手配業務",
        biz_list_8: "8. コンピュータによる委託会計計算業務及び委託代行による経理事務の管理業務",

        // SERVICES PAGE
        page_services_title: "SERVICES",
        page_services_subtitle: "会場・オフィス案内",
        venue_intro_head: "次世代会場空間",
        venue_intro_text: "赤坂・六本木・青山エリアを自在に行き来できる都心の中心地に、<br>洗練された次世代オフィス空間が誕生。",
        label_floorplan: "FLOOR PLAN",
        label_features: "FEATURES",
        vf_1_title: "複数駅利用可",
        vf_1_desc: "赤坂・六本木・溜池山王など複数駅利用可、都心を自在に繋ぐ利便性",
        vf_2_title: "多彩な共用スペース",
        vf_2_desc: "ミーティングルーム、共有ラウンジ、屋上テラスなど多彩な共用スペース",
        vf_3_title: "すぐに使える",
        vf_3_desc: "デスク・チェア・高速インターネット完備、すぐに使えるワークプレイス",
        vf_4_title: "快適で安心",
        vf_4_desc: "全室個別空調＆開閉可能な窓で、快適で安心なオフィス環境を実現",

        // PRIVACY PAGE
        page_privacy_title: "PRIVACY POLICY",
        page_privacy_subtitle: "個人情報保護方針",
        privacy_body: `
            <h3>1. 個人情報の収集と利用</h3>
            <p>株式会社KATENRAKU（以下「当社」といいます。）は、お客様からお預かりした個人情報を、正当な事業の範囲内で、利用目的を明確に定めた上で収集し、その目的達成に必要な範囲内で利用いたします。</p>
            <h3>2. 個人情報の管理</h3>
            <p>当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
            <h3>3. 個人情報の第三者への開示・提供</h3>
            <p>当社は、お客様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
            <ul><li>お客様の同意がある場合</li><li>お客様が希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li><li>法令に基づき開示することが必要である場合</li></ul>
            <h3>4. 法令、規範の遵守と見直し</h3>
            <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
            <h3>5. お問い合わせ</h3>
            <p>当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br>株式会社KATENRAKU<br>〒107-0052 東京都港区赤坂6丁目19番46号<br>TEL: 03-5545-5234</p>
        `,

        // CONTACT PAGE
        page_contact_title: "CONTACT",
        page_contact_subtitle: "お問い合わせ",
        contact_info_head: "Get in Touch",
        contact_info_text: "事業に関するご質問、取材のご依頼など、<br>お気軽にお問い合わせください。",
        form_name: "お名前",
        form_email: "メールアドレス",
        form_message: "お問い合わせ内容",
        form_submit: "送信する",
        msg_success: "お問い合わせありがとうございます。送信が完了しました。",
        msg_error: "送信に失敗しました。時間をおいて再度お試しください。",
    },
    cn: {
        link_company: "公司简介",
        link_services: "业务详情",
        nav_contact: "联系我们",
        hero_badge: "全球化商务解决方案",
        hero_title: "跨越国界，<br><span class='gradient-text'>连接未来。</span>",
        hero_desc: "从不动产到科技教育。<br>以多维视角最大化释放企业潜能。",
        service_title: "业务领域",
        prop_title: "赤坂・六本木・青山核心区<br>次世代办公空间",
        prop_desc: "位于赤坂、六本木、青山核心区域，打造洗练的次世代商务办公空间，提供加速商务发展的理想环境。",
        feat_1: "赤坂/六本木 多站可用",
        feat_2: "会议室・休息室",
        feat_3: "家具网络完备",
        feat_4: "独立空调・可开窗",
        biz_consult_title: "经营咨询",
        biz_consult_desc: "企业创业与经营咨询，协助海外企业进入日本市场及日本企业拓展海外市场。",
        biz_media_title: "传媒广告",
        biz_media_desc: "互联网、电子出版、视频制作及利用各类媒体进行的广告策划业务。",
        biz_edu_title: "教育与人才派遣",
        biz_edu_desc: "企业培训、研讨会举办，以及教育人才与劳务派遣管理服务。",
        biz_ip_title: "著作权管理",
        biz_ip_desc: "著作权、出版权、翻译权等的管理、买卖及出版相关业务。",
        biz_travel_title: "差旅安排",
        biz_travel_desc: "国内外住宿设施及铁路、航空、船舶、出租车等交通工具的安排业务。",
        biz_acc_title: "财务会计代办",
        biz_acc_desc: "利用计算机进行的委托会计计算业务及财务事务管理代办。",
        link_privacy: "隐私政策",

        // COMPANY
        page_company_title: "COMPANY",
        page_company_subtitle: "公司简介",
        th_name: "公司名称",
        th_address: "总部地址",
        th_est: "成立日期",
        th_tel: "电话号码",
        th_biz: "经营范围",
        co_name_val: "株式会社KATENRAKU (华天乐)",
        co_address_val: "〒107-0052 东京都港区赤坂6-19-46",
        co_est_val: "2017年12月8日",
        biz_list_1: "1. 国内外不动产买卖、中介、租赁、管理及咨询业务",
        biz_list_2: "2. 企业创业经营咨询，海外企业进入日本市场及日本企业拓展海外市场的支援业务",
        biz_list_3: "3. 互联网、电子出版、视频等媒体广告策划制作及教育培训、邮购业务",
        biz_list_4: "4. 企业经营及人才培养研修、讲座、研讨会活动举办及讲师派遣",
        biz_list_5: "5. 著作権、出版権、翻译权管理及出版相关业务",
        biz_list_6: "6. 教育人才派遣管理及劳务派遣相关业务",
        biz_list_7: "7. 国内外住宿设施及交通运输安排业务",
        biz_list_8: "8. 计算机委托会计计算及财务管理代办业务",

        // SERVICES
        page_services_title: "SERVICES",
        page_services_subtitle: "会场与办公室介绍",
        venue_intro_head: "次世代会场空间",
        venue_intro_text: "位于赤坂、六本木、青山核心区域，<br>打造洗练的次世代商务办公空间。",
        label_floorplan: "平面图",
        label_features: "设施特点",
        vf_1_title: "多站点可用",
        vf_1_desc: "赤坂、六本木、溜池山王等多站可用，连接市中心的便捷交通。",
        vf_2_title: "多彩共享空间",
        vf_2_desc: "配备会议室、共享休息室、屋顶露台等丰富的共享空间。",
        vf_3_title: "即刻入驻",
        vf_3_desc: "办公桌椅、高速网络设施完备，即刻可用的办公场所。",
        vf_4_title: "舒适安心",
        vf_4_desc: "全室独立空调 & 可开闭窗户，实现舒适安心的办公环境。",

        // PRIVACY
        page_privacy_title: "PRIVACY POLICY",
        page_privacy_subtitle: "隐私政策",
        privacy_body: `
            <h3>1. 个人信息的收集与使用</h3>
            <p>株式会社KATENRAKU（以下简称“本公司”）在合法的业务范围内，明确规定使用目的后收集客户的个人信息，并在达成该目的所需的范围内进行使用。</p>
            <h3>2. 个人信息的管理</h3>
            <p>本公司将保持客户个人信息的准确性和最新性，并采取必要措施（如维护安全系统、完善管理体制、加强员工教育等），防止个人信息的非法访问、丢失、损坏、篡改或泄露，对个人信息进行严格管理。</p>
            <h3>3. 向第三方披露或提供个人信息</h3>
            <p>本公司将妥善管理从客户处获取的个人信息，除以下情况外，不会向第三方披露个人信息：</p>
            <ul><li>征得客户同意时</li><li>为了提供客户希望的服务，向本公司委托业务的承包商披露时</li><li>根据法律法规必须披露时</li></ul>
            <h3>4. 遵守法律法规与持续改进</h3>
            <p>本公司将遵守适用于所持有个人信息的日本法律法规及其他规范，并适时审查本政策内容，努力进行改进。</p>
            <h3>5. 联系我们</h3>
            <p>关于本公司个人信息处理的咨询，请联系以下窗口：<br>株式会社KATENRAKU (华天乐)<br>〒107-0052 东京都港区赤坂6-19-46<br>TEL: 03-5545-5234</p>
        `,

        // CONTACT
        page_contact_title: "CONTACT",
        page_contact_subtitle: "联系我们",
        contact_info_head: "Get in Touch",
        contact_info_text: "关于业务咨询或采访请求，<br>请随时与我们联系。",
        form_name: "姓名",
        form_email: "电子邮箱",
        form_message: "咨询内容",
        form_submit: "发送",
        msg_success: "感谢您的联系。发送已完成。",
        msg_error: "发送失败。请稍后再试。",
    },
    en: {
        link_company: "Company",
        link_services: "Services",
        nav_contact: "Contact",
        hero_badge: "Global Business Solutions",
        hero_title: "Boundless Vision,<br><span class='gradient-text'>Connected Future.</span>",
        hero_desc: "Maximizing corporate potential through Real Estate, Technology, and Education.",
        service_title: "Our Business",
        prop_title: "Akasaka / Roppongi<br>Next-Gen Office",
        prop_desc: "A sophisticated next-generation office space born in the heart of the city, freely accessible from Akasaka, Roppongi, and Aoyama.",
        feat_1: "Multi-station Access",
        feat_2: "Meeting Rooms & Lounge",
        feat_3: "Furnished & High-speed Net",
        feat_4: "Indv. AC & Windows",
        biz_consult_title: "Business Consulting",
        biz_consult_desc: "Startup/Management consulting. Market entry support for foreign and Japanese companies.",
        biz_media_title: "Media & Advertising",
        biz_media_desc: "Planning and production of digital media, video, publishing, and advertising.",
        biz_edu_title: "Education & HR",
        biz_edu_desc: "Corporate training, seminars, events, and dispatch of educational personnel.",
        biz_ip_title: "IP Management",
        biz_ip_desc: "Management, trading, and publishing of copyrights and translation rights.",
        biz_travel_title: "Travel & Logistics",
        biz_travel_desc: "Arrangement of accommodation and transportation (rail, air, ship, taxi).",
        biz_acc_title: "Accounting Outsourcing",
        biz_acc_desc: "Computer-based accounting outsourcing and management services.",
        link_privacy: "Privacy Policy",

        // COMPANY
        page_company_title: "COMPANY",
        page_company_subtitle: "Company Profile",
        th_name: "Trade Name",
        th_address: "Head Office",
        th_est: "Established",
        th_tel: "Phone",
        th_biz: "Business Activities",
        co_name_val: "KATENRAKU Inc.",
        co_address_val: "6-19-46 Akasaka, Minato-ku, Tokyo 107-0052",
        co_est_val: "December 8, 2017",
        biz_list_1: "1. Real estate sales, brokerage, leasing, management, and consulting (domestic/overseas)",
        biz_list_2: "2. Corporate consulting for startups, market entry support for foreign/Japanese companies",
        biz_list_3: "3. Planning/production of digital media/ads, and educational training businesses",
        biz_list_4: "4. Corporate training, seminars, events, and instructor dispatch",
        biz_list_5: "5. Management/trading of copyrights, publication rights, translation rights",
        biz_list_6: "6. Management services for educational personnel dispatch and worker dispatch business",
        biz_list_7: "7. Arrangement of accommodation and transportation (rail, air, ship, taxi)",
        biz_list_8: "8. Computer-based accounting outsourcing and management",

        // SERVICES
        page_services_title: "SERVICES",
        page_services_subtitle: "Venue & Office Guide",
        venue_intro_head: "Next-Gen Venue Space",
        venue_intro_text: "A sophisticated next-generation office space born in the heart of the city,<br>freely accessible from Akasaka, Roppongi, and Aoyama.",
        label_floorplan: "FLOOR PLAN",
        label_features: "FEATURES",
        vf_1_title: "Multi-station Access",
        vf_1_desc: "Convenient access to Akasaka, Roppongi, Tameike-Sanno, connecting the city center freely.",
        vf_2_title: "Various Shared Spaces",
        vf_2_desc: "Meeting rooms, shared lounge, rooftop terrace, and other diverse shared spaces.",
        vf_3_title: "Ready to Use",
        vf_3_desc: "Fully furnished with desks, chairs, and high-speed internet. A workplace ready to use immediately.",
        vf_4_title: "Comfort & Safety",
        vf_4_desc: "Individual air conditioning & openable windows in all rooms, realizing a comfortable and safe office environment.",

        // PRIVACY
        page_privacy_title: "PRIVACY POLICY",
        page_privacy_subtitle: "Privacy Policy",
        privacy_body: `
            <h3>1. Collection and Use of Personal Information</h3>
            <p>KATENRAKU Inc. (hereinafter referred to as "the Company") collects personal information from customers within the scope of legitimate business activities, after clearly defining the purpose of use, and uses it within the scope necessary to achieve that purpose.</p>
            <h3>2. Management of Personal Information</h3>
            <p>The Company keeps customers' personal information accurate and up-to-date and takes necessary measures to prevent unauthorized access, loss, damage, falsification, or leakage of personal information. We implement strict security measures, including maintaining security systems, establishing management structures, and thorough employee training.</p>
            <h3>3. Disclosure and Provision to Third Parties</h3>
            <p>The Company properly manages personal information received from customers and does not disclose it to third parties except in the following cases:</p>
            <ul><li>When the customer has given consent</li><li>When disclosing to contractors to whom the Company outsources business in order to provide services desired by the customer</li><li>When disclosure is required by law</li></ul>
            <h3>4. Compliance with Laws and Review</h3>
            <p>The Company complies with Japanese laws and other regulations applicable to the personal information it holds, and reviews the content of this policy as appropriate to strive for improvement.</p>
            <h3>5. Contact Us</h3>
            <p>For inquiries regarding our handling of personal information, please contact:<br>KATENRAKU Inc.<br>6-19-46 Akasaka, Minato-ku, Tokyo 107-0052<br>TEL: +81-3-5545-5234</p>
        `,

        // CONTACT
        page_contact_title: "CONTACT",
        page_contact_subtitle: "Contact Us",
        contact_info_head: "Get in Touch",
        contact_info_text: "For business inquiries or interview requests,<br>please feel free to contact us.",
        form_name: "Name",
        form_email: "Email Address",
        form_message: "Message",
        form_submit: "Send Message",
        msg_success: "Thank you. Your message has been sent.",
        msg_error: "Oops! There was a problem submitting your form.",
    }
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================
const langCodeMap = {
    'jp': 'ja',
    'cn': 'zh-CN',
    'en': 'en'
};

function switchLang(lang) {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = langCodeMap[lang] || lang;

    // Toggle Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Replace Text
    const data = translations[lang];
    if (data) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });
    }
}

// ==========================================
// 3. MAIN INITIALIZATION (DOMContentLoaded)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. Language Init ---
    const urlParams = new URLSearchParams(window.location.search);
    const savedLang = urlParams.get('lang') || localStorage.getItem('site-lang') || 'jp';
    switchLang(savedLang);

    // --- B. Mobile Menu Logic (Fixing the click issue) ---
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const body = document.body;

    if (hamburger && mobileMenu) {
        // Toggle menu on button click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu if clicking outside (optional safety)
        mobileMenu.addEventListener('click', (e) => {
            if(e.target === mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    } else {
        console.warn("Mobile menu elements not found in DOM");
    }

    // --- C. Scroll Animations (Lines & Parallax) ---
    const scrollPaths = document.querySelectorAll('.scroll-path');
    const bgGrid = document.querySelector('.bg-grid');
    
    // Init Lines
    const pathLengths = Array.from(scrollPaths).map(path => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        // Start with 60% hidden (40% visible)
        path.style.strokeDashoffset = len * 0.6; 
        return { el: path, len: len };
    });

    // Scroll Handler
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percent = Math.min(scrolled / (maxScroll || 1), 1); // Avoid div by zero

        // Update Lines
        pathLengths.forEach(item => {
            let newOffset = (item.len * 0.6) - (item.len * 0.6 * (percent * 1.2));
            newOffset = Math.max(0, newOffset);
            item.el.style.strokeDashoffset = newOffset;
        });
        
        // Update Grid
        if(bgGrid) {
            bgGrid.style.transform = `scale(${1 + percent * 0.1}) rotate(${percent * 5}deg)`;
        }
    });

    // --- D. Scroll Reveal (Fade Up Elements) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animTargets = document.querySelectorAll('.anim-fade-up');
    animTargets.forEach(target => {
        observer.observe(target);
    });
    
    // Fail-safe: Force show visible elements if observer is slow
    setTimeout(() => {
        animTargets.forEach(target => {
            if (target.getBoundingClientRect().top < window.innerHeight) {
                target.classList.add('is-visible');
            }
        });
    }, 500);

    // --- E. Contact Form Handling (AJAX) ---
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const status = document.getElementById("form-status");
            const data = new FormData(event.target);
            const currentLang = localStorage.getItem('site-lang') || 'jp';
            const msgs = translations[currentLang];

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = msgs.msg_success;
                    status.className = "success";
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(e => e["message"]).join(", ");
                        } else {
                            status.innerHTML = msgs.msg_error;
                        }
                        status.className = "error";
                    });
                }
            }).catch(() => {
                status.innerHTML = msgs.msg_error;
                status.className = "error";
            });
        });
    }
}); // End DOMContentLoaded


// ==========================================
// 4. GLOBAL FUNCTIONS (Gallery & External)
// ==========================================
let currentSlide = 0;
const totalSlides = 3;

function updateGallery() {
    const wrapper = document.getElementById('fp-gallery');
    const dots = document.querySelectorAll('.gal-dot');
    
    if(!wrapper) return;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        if(index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function moveGallery(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    else if (currentSlide >= totalSlides) currentSlide = 0;
    updateGallery();
}

function jumpGallery(index) {
    currentSlide = index;
    updateGallery();
}