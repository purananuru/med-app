const SymptomsData = [
  {
    id: 1,
    name: "general",
    categories: [
      {
        id: 1,
        category: "fever",
        sub_category: ["low-grade", "medium", "high"],
      },
      ,
      {
        id: 2,
        category: "chills",
        sub_category: ["chills"],
      },
      {
        id: 3,
        category: "sweats",
        sub_category: ["sweats"],
      },
      {
        id: 4,
        category: "shivering",
        sub_category: ["shivering", "violent-shivering"],
      },
      {
        id: 5,
        category: "general weakness",
        sub_category: ["muscle-ache", "extreme-tiredness"],
      },
      {
        id: 6,
        category: "cough",
        sub_category: [
          "persistent",
          "continuous",
          "uncontrolled",
          "cough",
          "dry",
          "wet/productive",
          "hoarse/barking",
        ],
      },
      {
        id: 7,
        category: "smell",
        sub_category: ["change to the sense of smell", "loss of smell"],
      },
      {
        id: 8,
        category: "congestion",
        sub_category: ["congestion"],
      },
      {
        id: 9,
        category: "breathing",
        sub_category: [
          "wheezing",
          "hard to breathe",
          "severe",
          "rapid-and-shallow-breathing",
          "high-pitched-intake-sounds-like-whoop",
        ],
      },
      {
        id: 10,
        category: "sneezing",
        sub_category: ["sneezing"],
      },
      {
        id: 11,
        category: "headache",
        sub_category: [
          "more-frequent",
          "more-severe",
          "severe-in-the-morning",
          "worsened-by-bending",
          "worsened-by-coughing",
          "mild",
          "headache",
        ],
      },
      {
        id: 12,
        category: "seizures",
        sub_category: ["seizures"],
      },
      {
        id: 13,
        category: "speech",
        sub_category: ["difficulties", "slurred"],
      },
      {
        id: 14,
        category: "paralysis",
        sub_category: ["on-one-side-of-body", "paralysis"],
      },
      {
        id: 15,
        category: "weakness",
        sub_category: ["on-one-side-of-body"],
      },
      {
        id: 16,
        category: "nausea",
        sub_category: ["nausea"],
      },
      {
        id: 17,
        category: "vomiting",
        sub_category: ["vomiting"],
      },
      {
        id: 18,
        category: "joint-pain",
        sub_category: ["severe-and-persistent"],
      },
      {
        id: 19,
        category: "fatigue",
        sub_category: ["fatigue"],
      },
      {
        id: 20,
        category: "restlessness",
        sub_category: ["restlessness"],
      },
      {
        id: 21,
        category: "irritability",
        sub_category: ["irritability"],
      },
      {
        id: 22,
        category: "special-symptoms",
        sub_category: [
          "high-fever-with-profuse-sweating-alternate-with-shivering-and-chills",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "indvividual-body-parts",
    categories: [
      {
        id: 1,
        category: "eyes",
        sub_category: ["red-eye-with-pain", "red-watery-eyes"],
      },
      {
        id: 2,
        category: "head",
        sub_category: ["head"],
      },
      {
        id: 3,
        category: "hair-and-scalp",
        sub_category: ["hair-and-scalp"],
      },
      {
        id: 4,
        category: "face",
        sub_category: ["face"],
      },
      {
        id: 5,
        category: "eye",
        sub_category: ["eye"],
      },
      {
        id: 6,
        category: "ear",
        sub_category: ["ear"],
      },
      {
        id: 7,
        category: "nose",
        sub_category: ["runny", "stuffy", "congested"],
      },
      {
        id: 8,
        category: "mouth",
        sub_category: ["mouth"],
      },
      {
        id: 9,
        category: "throat",
        sub_category: ["sore", "ithcy"],
      },
      {
        id: 10,
        category: "neck",
        sub_category: ["neck"],
      },
      {
        id: 11,
        category: "shoulder",
        sub_category: ["shoulder"],
      },
      {
        id: 12,
        category: "arm-wrist",
        sub_category: ["arm-wrist"],
      },
      {
        id: 13,
        category: "chest",
        sub_category: ["chest"],
      },
      {
        id: 14,
        category: "neck",
        sub_category: ["neck"],
      },
      {
        id: 15,
        category: "breast",
        sub_category: ["breast"],
      },
      {
        id: 16,
        category: "back-upper",
        sub_category: ["back-upper"],
      },
      {
        id: 17,
        category: "back-lower",
        sub_category: ["back-lower"],
      },
      {
        id: 18,
        category: "abodmen",
        sub_category: ["abodmen"],
      },
      {
        id: 19,
        category: "pelvis",
        sub_category: ["pelvis"],
      },
      {
        id: 20,
        category: "groin",
        sub_category: ["groin"],
      },
      {
        id: 21,
        category: "urinary",
        sub_category: ["urinary"],
      },
      {
        id: 22,
        category: "female-genitals",
        sub_category: ["female-genitals"],
      },
      {
        id: 23,
        category: "male-genitals",
        sub_category: ["male-genitals"],
      },
      {
        id: 24,
        category: "buttocks-anus",
        sub_category: ["buttocks-anus"],
      },
      {
        id: 25,
        category: "bowels",
        sub_category: ["bowels"],
      },
      {
        id: 26,
        category: "hip",
        sub_category: ["hip"],
      },
      {
        id: 27,
        category: "thigh",
        sub_category: ["thigh"],
      },
      {
        id: 28,
        category: "knee",
        sub_category: ["knee"],
      },
      {
        id: 29,
        category: "leg",
        sub_category: ["leg"],
      },
      {
        id: 30,
        category: "ankle",
        sub_category: ["ankle"],
      },
      {
        id: 31,
        category: "foot",
        sub_category: ["foot"],
      },
    ],
  },
  {
    id: 3,
    name: "stool-urine-mucus-discharge",
    categories: [
      {
        id: 1,
        category: "stool",
        sub_category: [
          "diarrhea",
          "constipation",
          "black-colored",
          "blood-present",
          "blood-mixed in stool",
          "blood-in-wipes",
        ],
      },
      {
        id: 2,
        category: "skin-rash",
        sub_category: [
          "rash",
          "red-spots-turning-into-fluid-filled-blisters-and-dry-out-to-scabs",
          "bubbly-rash-affecting-one-side-of-face",
          "rash-on-face-spreading-to-body-limbs",
          "head-rash-spreading-to-body",
          "brigh-red-rash-on-cheeks-spreading-to-head-to-body",
          "rash-on-palm-and-soles",
        ],
      },
      {
        id: 3,
        category: "skin-itching",
        sub_category: [
          "miserable-itching",
          "all-over-body-itching",
          "severe-in-groin-itching",
        ],
      },
      {
        id: 4,
        category: "skin-bumps-lumps-spots-moles",
        sub_category: ["white-spots-inside-cheek"],
      },
      {
        id: 5,
        category: "skin-feel-discoloration",
        sub_category: [
          "wet-and-sweaty",
          "yellowing-of-the-skin-and whites-of-eyes",
        ],
      },
      {
        id: 6,
        category: "urine",
        sub_category: [
          "frequent_urination (more than 3 times in night)",
          "urine-hesitancy",
          "blood-present",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "brain-and-mind-related",
    categories: [
      {
        id: 1,
        category: "brain-related",
        sub_category: [
          "personality-changes",
          "behavior-changes",
          "unconsciousness",
          "delirium",
          "confusion",
        ],
      },
    ],
  },
];

export default SymptomsData;
