const Experience = (): React.JSX.Element => {
  return (
    <section id="experience" className="py-5">
      <h2 className="section-header mb-5">Experience Highlights</h2>
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-date">April 2025 - Current</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Software Developer (Contract) - Auger (via Quadrant
              Technologies)
            </h4>
            <p>
              Responsible for frontend development using React SPA, Vite, NX
              Monorepo, Material UI, Figma, and ReactFlow. My daily activities
              include feature development, story tracking, QA engagement, and
              mentoring junior developers.
            </p>
            <p>
              <strong>Technologies:</strong> React, Vite, NX Monorepo, Material
              UI, Figma, ReactFlow, TypeScript, JavaScript
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">February 2024 - February 2025</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Software Developer (Contract) - Meta (via Magnit)
            </h4>
            <p>
              Played a key role in developing AI plugins for Sports and POI
              search. My work laid the groundwork for ongoing evaluation,
              ensuring the quality and effectiveness of these features. I also
              leveraged AI to generate synthetic data and perform first-pass
              quality evaluations, significantly enhancing the efficiency of our
              testing process. This included building end-to-end evaluation
              code, interactive dashboards, and comprehensive datasets for the
              POI Search plugin, enabling iterative improvements in search
              result quality.
            </p>
            <p>
              <strong>Technologies:</strong> C++, Python, Go, PHP
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">September 2023 - January 2024</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Software Developer (Contract) - Leica Biosystems (via
              Oxford)
            </h4>
            <p>
              Designed and developed of a multi-threaded Go CLI application for
              capturing microscope slide images. This project included both the
              CLI application and the server-side cloud component for AWS, GCP,
              and Azure, each with 80% test coverage. I also managed the Docker
              container definitions, ensuring seamless deployment across Lambda,
              Cloud Run, and other containerized environments. I contributed to
              defining coding standards and implementing automated deployments.
            </p>
            <p>
              <strong>Technologies:</strong> Go, AWS, GCP, Azure, Docker,
              Bitbucket
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">January 2023 - June 2023</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Software Developer - SauceLabs (Venture-backed Startup)
            </h4>
            <p>
              Led the development of a replacement visualization testing
              platform. Following the project's cancellation, I pivoted to
              implement Axe Deque accessibility services in TypeScript,
              integrating them into Android emulated devices and developing the
              JavaScript frontend updates to display accessibility results.
            </p>
            <p>
              <strong>Technologies:</strong> Typescript, Go, Javascript, GCP,
              Gitlab
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">January 2022 - October 2022</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Developer (Contract) - Amazon Web Services (via Oxford)
            </h4>
            <p>
              During my time at Amazon Web Services, I made significant
              contributions to the codebase, improving its quality and
              maintainability. I refactored and removed thousands of lines of
              unused code, resulting in a more streamlined and efficient system.
              I also completely overhauled the lambda deployment process,
              transitioning to a fully automated and standardized CI/CD
              pipeline. I introduced Makefiles for consistent builds and
              zipping, AWS SAM for streamlined local build/test workflows, and
              pipenv/pre-commit for standardized linting and testing. Finally, I
              integrated these improvements into their existing Jenkins
              pipelines, ensuring all deployments to production occurred
              exclusively through CI/CD after code merge to the main branch.
              This eliminated inconsistencies and significantly improved
              deployment reliability.
            </p>
            <p>
              <strong>Technologies:</strong> Python, Go, AWS, Jenkins
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">January 2020 - August 2021</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Systems Development Engineer II - Amazon Web Services
            </h4>
            <p>
              Led the full-stack development of a React-based web application,
              encompassing OIDC authentication, API development, database
              design, Lambda functions, and comprehensive unit testing. Managed
              a team of five junior engineers, overseeing sprints, story
              creation, and backlog grooming.
            </p>
            <p>
              <strong>Technologies:</strong> Typescript, Python, Ruby, CDK, AWS
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">July 2019 - January 2020</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              DevOps Engineer (Contract) - Disney (via Insight Global)
            </h4>
            <p>
              Contributed to a large-scale corporate migration of code
              repositories, assisting teams with code migration, pipeline
              validation, and deployment support. Deployed and integrated
              HashiCorp Vault using Kubernetes and OIDC/OpenID to enhance
              security. Collaborated with a local team on Kubernetes, Docker,
              and Helm chart deployments and management.
            </p>
            <p>
              <strong>Technologies:</strong> Ruby, PowerShell, Kubernetes, Helm,
              Vault, Gitlab, Nexus
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">June 2018 - June 2019</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Systems Development Engineer II (Contract) - Amazon Web Services
              (via Collabera)
            </h4>
            <p>
              Developed and implemented automated tools using Ruby and Amazon's
              in-house pipeline to deploy and maintain multiple team services at
              a global scale. These tools streamlined deployments and improved
              the reliability of critical services. Collaborated cross-team to
              deliver these automated solutions.
            </p>
            <p>
              <strong>Technologies:</strong> Ruby, Python, AWS
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">July 2017 - May 2018</div>
          <div className="timeline-content">
            <h4 className="timeline-title">Software Engineer - Getty Images</h4>
            <p>
              Contributed to the development and maintenance of the main upload
              API for Getty Images, a high-volume, critical component of their
              content ingestion pipeline. Developed in C# using .NET and .NET
              Core, with a strong emphasis on code quality, SOLID principles,
              and Gang of Four design patterns.
            </p>
            <p>
              <strong>Technologies:</strong> C#, PowerShell, MSBuild, AWS
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">June 2016 - July 2017</div>
          <div className="timeline-content">
            <h4 className="timeline-title">
              Senior Systems Engineer - Getty Images
            </h4>
            <p>
              Developed automation solutions for infrastructure management,
              leveraging tools like Ansible Tower, GitLab CI/CD, Packer, and
              Puppet. Scripted in PowerShell, Python, and Bash to automate
              Windows configuration, updates, and deployments. Improved team
              adoption of automation tools and best practices through training
              and knowledge sharing.
            </p>
            <p>
              <strong>Technologies:</strong> PowerShell, Ruby, Terraform,
              Ansible, Puppet, AWS
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">April 2014 - June 2016</div>
          <div className="timeline-content">
            <h4 className="timeline-title">Software Engineer - CDK Global</h4>
            <p>
              Developed and implemented automation solutions for full-stack
              provisioning, leveraging tools like Puppet, PowerShell, and
              Hyper-V. Created a Puppet testing framework using PowerShell to
              ensure the reliability of provisioning modules. Gained experience
              with a variety of platforms, including VMware, VCO, and an
              open-source REST API platform. Utilized scripting skills
              (PowerShell, JavaScript, Python, Ruby) to automate diverse
              configuration and management tasks across Linux and Windows
              environments.
            </p>
            <p>
              <strong>Technologies:</strong> PowerShell, Ruby, Puppet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
