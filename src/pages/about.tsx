import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    Powered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export default About;
