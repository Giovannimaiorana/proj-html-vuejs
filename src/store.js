import { reactive } from 'vue';
export const store = reactive({
    link: [
        {
            nav: 'Home '
        },
        {
            nav: 'Pages '
        },
        {
            nav: 'Courses '
        },
        {
            nav: 'Features'
        },
        {
            nav: 'Blog '
        },
        {
            nav: 'Shop '
        },
    ],
    social: [
        {
            logo: '<i class="fa-brands fa-twitter"></i> '
        },
        {
            logo: '<i class="fa-brands fa-facebook-f"></i> '
        },
        {
            logo: '<i class="fa-brands fa-instagram"></i> '
        },
        {
            logo: '<i class="fa-brands fa-linkedin-in"></i>'
        },
    ],
    stats: [
        {
            number: '1.926',
            text: 'FINISHED SESSIONS '
        },
        {
            number: '100%',
            text: 'SATISFACTION RATE '
        },
        {
            number: '3092 +',
            text: 'ENROLLED LEARNERS'
        },
        {
            number: '200',
            text: 'ONLINE INSTRUCTORS '
        },
    ],
    card: [
        {
            immagine: "motivation-course-06-480x298.jpg",
            price: '$30.00',
            text: 'How To be Successful:Create A Growth Mindset For Success',
            lesson: '3 Lessons',
            student: '50 Students',
        },
        {
            immagine: "motivation-course-05-480x298.jpg",
            price: '$30.00',
            text: 'How To be Build Confidence in Your Abilities',
            lesson: '1 Lesson',
            student: '50 Students',
        },
        {
            immagine: "motivation-course-04-480x298.jpg",
            price: '$20.00',
            text: 'Productivity Machine - Focus in a Distracted World',
            lesson: '5 Lessons',
            student: '50 Students',
        },
        {
            immagine: "motivation-course-03-480x298.jpg",
            price: '$20.00',
            text: 'Effective Time Management Mastery - Complete Guide ',
            lesson: '18 Lessons',
            student: '50 Students',
        },
        {
            immagine: "motivation-course-02-480x298.jpg",
            price: '$25.99',
            text: 'Body Language Secrets for Entrepreneurs ',
            lesson: '19 Lessons',
            student: '50 Students',
        },
        {
            immagine: "motivation-course-01-480x298.jpg",
            price: '$19.99',
            text: 'Management Skills: The Science of Leadership',
            lesson: '17 Lessons',
            student: '50 Students',
        },
    ],
    book: [
        {
            check: 'Help you understand yourself better',
        },
        {
            check: 'Revealing mature tips',
        },
        {
            check: 'Give the right advice ',
        },
        {
            check: 'Fascinating examples of alpha man ',
        },
    ],
    booktitle: [
        {
            immagine: "product-book-11-400x400.jpg",
            titolo: 'Alpha man by Maxcoach',
            price: '$29.00',
        },
        {
            immagine: "product-book-10-400x400.jpg",
            titolo: 'Real man 4.0 by Maxcoach',
            price: '$39.00',
        }
    ],
    partner: [
        {
            logo: "client-logo-01-primary.png"
        },
        {
            logo: "client-logo-02-primary.png"
        },
        {
            logo: "client-logo-03-primary.png"
        },
        {
            logo: "client-logo-04-primary.png"
        },

        {
            logo: "client-logo-05-primary.png"
        },
        {
            logo: "client-logo-06-primary.png"
        },
        {
            logo: "client-logo-07-primary.png"
        },
    ],
    blog: [
        {
            immagine: "motivation-blog-04-480x325.jpg",
            date: 'May 13, 2020',
            titolo: 'How to Say True to Your Personal Brand ',
            descri: 'When it comes, to your business or career, you want...',
        },
        {
            immagine: "motivation-blog-03-480x325.jpg",
            date: 'May 13, 2020',
            titolo: '5 Vital Lessons in 5 Years of Freelancing ',
            descri: 'Being self-employed and working from home, it easy tp get...',
        },
        {
            immagine: "motivation-blog-02-480x325.jpg",
            date: 'May 13, 2020',
            titolo: '11 Super Useful Tips for Small-Business Owners ',
            descri: 'Being a small-business owner poses a ton od challenges. We...',
        },
        {
            immagine: "motivation-blog-01-480x325.jpg",
            date: 'May 13, 2020',
            titolo: 'How to Give Yourself Grace to Start Again ',
            descri: 'Forgive yourself for bad habits you may have started or...',
        },
    ]

})