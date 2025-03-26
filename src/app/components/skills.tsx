// src/app/components/Skills.tsx
interface SkillsProps {
    theme: 'light' | 'dark';
}

const Skills = ({ theme }: SkillsProps) => {
    return (
        <section id="skills" className="py-5 container">
            <h2 className="mb-4 section-header">Skills</h2> {/* Added section-header class */}
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <h5 className={`skill-header text-${theme === 'dark' ? 'light' : 'dark'}`}>Front-End:</h5>
                </div>
                <div className="col-md-8">
                    <p>React, Next.js, TypeScript, JavaScript, HTML, CSS</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <h5 className={`skill-header text-${theme === 'dark' ? 'light' : 'dark'}`}>Back-End:</h5>
                </div>
                <div className="col-md-8">
                    <p>Go, JavaScript (Node.js), Python, C++</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <h5 className={`skill-header text-${theme === 'dark' ? 'light' : 'dark'}`}>Cloud:</h5>
                </div>
                <div className="col-md-8">
                    <p>AWS (API Gateway, Lambda, EC2, S3, CloudFormation), GCP (Compute, Storage)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <h5 className={`skill-header text-${theme === 'dark' ? 'light' : 'dark'}`}>DevOps:</h5>
                </div>
                <div className="col-md-8">
                    <p>Terraform, CDK, GitLab, GitHub Actions, Jenkins, CI/CD, Docker, Kubernetes</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-1">
                    <h5 className={`skill-header text-${theme === 'dark' ? 'light' : 'dark'}`}>Databases:</h5>
                </div>
                <div className="col-md-8">
                    <p>Postgres, MySQL, DynamoDB, Datastore</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
