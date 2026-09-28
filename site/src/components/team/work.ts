/*
  What each practitioner leads, as photographs at full size (L4 rebuild, 28-09-2026). Frames come from
  Belle's Drive folder "Wellness Partners", one subfolder per person. Captions name only the practice
  and the person, both already stated in their bios. Used by /team (the "on the day" slider) and
  /team/<slug> (the person's own strip, ahead of the experiences they lead).
*/
export interface WorkFrame { person: string; media: string; caption: string }

export const work: WorkFrame[] = [
  { person: 'belle-redden', media: 'story-opener', caption: 'Belle Redden in the kitchen' },
  { person: 'jaimi-baker', media: 'work-jaimi-yoga', caption: 'Yoga with Jaimi Baker' },
  { person: 'kristian-ryan', media: 'work-kris-breathwork', caption: 'Breathwork with Kristian Ryan' },
  { person: 'luca-guiotto', media: 'work-luca-plating', caption: 'Luca Guiotto plating at the bench' },
  { person: 'kristian-ryan', media: 'work-kris-sauna', caption: 'Contrast therapy with Kristian Ryan' },
  { person: 'courtney-selfe', media: 'work-courtney-massage', caption: 'Massage at The Earth House and Spa' },
  { person: 'luca-guiotto', media: 'work-luca-cooking', caption: 'Luca Guiotto at the kitchen bench' },
  { person: 'malissa-fedele', media: 'work-malissa-pasta', caption: 'A pasta making masterclass with Malissa Fedele' },
];

export const workFor = (person: string) => work.filter((w) => w.person === person);
