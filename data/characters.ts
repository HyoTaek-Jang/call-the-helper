import { Character } from "../types";

export const characters: Character[] = [
  {
    id: "police",
    name: "이유진 순경",
    image: require("../assets/images/character-police.png"),
    description: "안전과 규칙의 중요성을 알려주는 친근한 경찰관",
    voiceType: "stern",
    previewAudio: require("../assets/audios/police-preview.mp3"),
    scenarios: [
      {
        id: "cleaning-room",
        title: "방 정리하기",
        description: "아이가 정리정돈을 하지 않을 때 도움을 주는 시나리오",
        category: "생활습관",
        duration: "35초",
        script: "안녕하세요, 김경찰입니다. 정리정돈은 안전한 생활의 기본이에요. 흩어진 물건들 때문에 다칠 수도 있거든요. 지금 함께 방을 깔끔하게 정리해볼까요?",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "teacher",
    name: "고은 선생님",
    image: require("../assets/images/character-teacher.png"),
    description: "배움과 성장을 도와주는 따뜻한 선생님",
    voiceType: "gentle",
    previewAudio: require("../assets/audios/teacher-preview.mp3"),
    scenarios: [
      {
        id: "eating-vegetables",
        title: "야채 먹기",
        description: "편식하는 아이에게 야채의 중요성을 알려주는 시나리오",
        category: "식사예절",
        duration: "40초",
        script: "안녕하세요, 박선생님이에요. 야채는 우리 몸과 두뇌를 건강하게 만들어주는 소중한 음식이에요. 야채를 먹으면 공부도 더 잘하고 키도 쑥쑥 클 거예요!",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
  {
    id: "doctor",
    name: "이의사",
    image: require("../assets/images/character-doctor.png"),
    description: "건강과 생활습관을 지도하는 믿음직한 의사",
    voiceType: "professional",
    previewAudio: require("../assets/audios/doctor-preview.mp3"),
    scenarios: [
      {
        id: "brushing-teeth",
        title: "양치하기",
        description: "아이가 양치를 거부할 때 도움을 주는 시나리오",
        category: "건강관리",
        duration: "30초",
        script: "안녕하세요! 이의사입니다. 양치는 건강한 치아를 위해 꼭 필요한 치료예요. 지금 양치를 하면 충치균들이 모두 사라지고 하얀 치아를 지킬 수 있어요!",
        audioFile: require("../assets/audios/mangtae-common.mp3")
      }
    ]
  },
];