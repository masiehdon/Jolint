
import { useState } from 'react';
import styles from './inclusion.module.css';


interface Image {
  src: string;
  title: string;
  description: string;
}


const images1: Image[] = [
  { src: 'image1.jpg', title: 'How inclusion helps in work', description: 'Inclusion has a profound impact on employee engagement and productivity. When employees feel genuinely included and valued, they become more invested in their work and the organization as a whole.' },
  { src: 'image2.jpg', title: 'Building a culture of inclusion', description: 'Increased employee engagement and satisfaction: In an inclusive culture, employees feel a sense of belonging and acceptance. They are more engaged and motivated to perform at their best.' },
  { src: 'image3.jpg', title: 'Why equality is important', description: 'Equality ensures that every individual is treated fairly and without discrimination. It upholds the principle that all employees, regardless of their race, gender, age, or other, should have equal opportunities.' },
];

const images2: Image[] = [
  { src: 'image4.jpg', title: 'How diversity helps in work', description: 'By welcoming individuals from diverse backgrounds, experiences, and perspectives, businesses open doors to a wealth of fresh ideas and insights.' },
  { src: 'image5.jpg', title: 'Creating an inclusive culture', description: 'Show solidarity with marginalized groups and actively support their inclusion. Advocate for equal opportunities, fair treatment, and representation in decision-making processes.' },
  { src: 'image6.jpg', title: 'The power of diversity', description: 'Appreciate and value the diverse backgrounds, experiences, and perspectives of your colleagues. Engage in conversations and initiatives that celebrate diversity, diversity-focused training programs.' },
];

const images3: Image[] = [
  { src: 'image7.jpg', title: 'Creating a supportive work environment', description: 'Be willing to lend a hand to your colleagues when they need assistance. Collaborate and share knowledge and resources to foster a sense of teamwork.' },
  { src: 'image8.jpg', title: 'Addressing mental health in the workplace', description: 'Offer support during challenging times. Be there for your coworkers during difficult periods, such as personal crises or work-related challenges.' },
  { src: 'image9.jpg', title: 'Work-life balance', description: 'Promote work-life balance. Encourage a healthy work-life balance among your peers. Respect personal boundaries and avoid unnecessarily pressuring colleagues to work beyond their capacity.' },
];
const Inclusion = () => {

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  const renderImageBlocks = (imageArray: Image[], arrayIndexOffset: number) => (
    <div className={styles.imageGridContainer}>
      {imageArray.map((image, index) => {
        const currentIndex = index + arrayIndexOffset;
        return (
          <div key={currentIndex} className={styles.imageWithCaption}>
            <img
              src={image.src}
              alt={image.title}
              className={styles.image}
              onClick={() => toggleDescription(currentIndex)}
            />
            <h3 className={styles.imageTitle}>{image.title}</h3>
            {selectedImageIndex === currentIndex && (
              <p className={styles.imageCaption}>{image.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Why inclusion is important</h1>
      <p className={styles.paragraph}>
        Inclusion and diversity play crucial roles in helping a workplace thrive...
      </p>
      <h2 className={styles.customHeading1}>About inclusion at workplace</h2>
      {renderImageBlocks(images1, 0)}
      <h2 className={styles.customHeading2}>About diversity in organizations</h2>
      {renderImageBlocks(images2, images1.length)}
      <h2 className={styles.customHeading3}>About mental health at work</h2>
      {renderImageBlocks(images3, images1.length + images2.length)}
    </div>
  );
};


export default Inclusion;