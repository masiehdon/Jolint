interface FAQItem {
  Q: string;
    A: string;
    id: number
}

const faq: FAQItem[]  = [
    {
        Q: 'Why do I need to sign a consent form?',
        A: 'To be able to help your organisation to improve inclusion and belonging, also create a more diverse and inclusive workplace, we at Jolint need your consent to collect your personal data.',
        id: 1
    },
    {
        Q: 'How does AI analyze the data?',
        A: 'The algorithms look for patterns and relationships in the data, and will explore gender and age differences, uncovering variations in social influence and work patterns.',
        id: 2
    }, 
    {
        Q: 'Do you read my emails and chats?',
        A: 'The content of communications and calendars is never viewed nor processed. Jolint will only be processing the metadata associated with those communication channels.',
        id: 3
    },
    {
        Q: 'What result will I see?',
        A: 'You will access your team result as well as the result of the organization.',
        id: 4
    },
    {
        Q: 'How can inclusion help me at my workplace?',
        A: 'Research shows that diverse companies are more innovative and productive. A wide range of perspectives leads to a larger pool of knowledge and experiences to choose from, resulting in better decision making and problem solving.',
        id: 5
    },
    {
        Q: 'How long will you save my data?',
        A: 'The data will be stored as long as Jolint has a collaboration with your organization. This will make it possible to look for patterns on monthly and yearly basis. With that said, all your data will be anonymized and can not be lead to you.',
        id: 6
    }
]

export default faq;