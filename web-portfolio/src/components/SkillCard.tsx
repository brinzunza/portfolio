import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;

