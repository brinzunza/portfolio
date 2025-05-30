export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Writing',
    date: 'May 21, 2025',
    preview: 'Enlightenment on the impact and benefits of writing.',
    content: 'Writing is a permanent visual of your thoughts and ideas. It is the way we express what goes inside of our minds and publicate it to the world. While being considered overrated by those who prefer video logs, it can be a truly rewarding experience. \n \n Writing can be quick, slow, long, short, thought, thoughtless, stressful, stress-relieving, temporary or permament. It is a way to take a snapshot of you in a certain moment of time, which is what makes it all the more special. '
  },
  {
    id: '2',
    title: 'Debugging',
    date: 'May 22, 2025',
    preview: 'Fundamentally understanding debugging and everything else, since it applies to everything.',
    content: 'Debugging is a process that can be applied to anything. It is a way to find the root of the problem and fix it. It is a way to understand the problem and the solution. It is a way to learn and grow. It is a way to be better. \n \n If you are unhappy, debug it. Sounds simple but is truly a revealing process.'
  },
  {
    id: '3',
    title: 'Fluctuations',
    date: 'November 19, 2024',
    preview: 'The bad vs the good and how to balance them.',
    content: 'Having bad and good is part of a quality life. Smelling, seeing, hearing, felling all have good parts and bad parts. Would you like to get rid of them completely to get rid of bad parts? Would you get rid of your nose so that you never have to smell anything bad again? Would you get rid of your hands so that you never have to feel something painful again? Would you get rid of your eyes so that you never have to see something bad again? Would you get rid of your tongue so that you never have to taste anything bad again? No. There is a balance to them. Many people believe that we should get rid of pleasures and pains, but in reality they are part of this balance. Of course, sometimes that balance can become uneven, but this does not mean to get rid of them completely. '
  }
]; 