import { Character } from "../types";

export const characters: Character[] = [
  {
    id: "police",
    name: "김경찰",
    image: require("../assets/images/character-police.png"),
    description: "안전과 규칙의 중요성을 알려주는 친근한 경찰관",
    voiceType: "stern"
  },
  {
    id: "teacher",
    name: "박선생님",
    image: require("../assets/images/character-teacher.png"),
    description: "배움과 성장을 도와주는 따뜻한 선생님",
    voiceType: "gentle"
  },
  {
    id: "grandma",
    name: "할머니",
    image: require("../assets/images/character-grandma.png"),
    description: "사랑과 지혜를 전해주는 따뜻한 할머니",
    voiceType: "caring"
  },
  {
    id: "doctor",
    name: "이의사",
    image: require("../assets/images/character-doctor.png"),
    description: "건강과 생활습관을 지도하는 믿음직한 의사",
    voiceType: "professional"
  },
  {
    id: "firefighter",
    name: "최소방관",
    image: require("../assets/images/character-firefighter.png"),
    description: "용기와 책임감을 가르쳐주는 영웅 소방관",
    voiceType: "heroic"
  },
  {
    id: "mangtae",
    name: "망태할아범",
    image: require("../assets/images/character-mangtae.png"),
    description: "착하지 않은 아이들을 데려간다는 무서운 망태할아범",
    voiceType: "scary"
  }
];