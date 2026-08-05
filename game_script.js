const allSentenceData = {
  /* ============================================================
     [데이터 설정]
     ============================================================ */
  day9: [
    {
      ko: '저는 중국어를 할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '저는 중국어를 할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '저는 영어를 할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '저는 영어를 할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '저는 운전할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '저는 운전할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '저는 자전거를 탈 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '저는 자전거를 탈 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '저는 요리할 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '저는 요리할 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '저는 사진 찍을 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '저는 사진 찍을 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '저는 한자를 쓸 줄 알아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
    {
      ko: '저는 한자를 쓸 줄 몰라요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
    {
      ko: '누가 중국어를 할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '汉语', p: 'Hànyǔ' },
      ],
    },
    {
      ko: '누가 영어를 할 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '说', p: 'shuō' },
        { h: '英语', p: 'Yīngyǔ' },
      ],
    },
    {
      ko: '누가 운전할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '开车', p: 'kāichē' },
      ],
    },
    {
      ko: '누가 자전거를 탈 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '骑', p: 'qí' },
        { h: '自行车', p: 'zìxíngchē' },
      ],
    },
    {
      ko: '누가 요리할 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '会', p: 'huì' },
        { h: '做饭', p: 'zuòfàn' },
      ],
    },
    {
      ko: '누가 사진을 찍을 줄 몰라요?',
      chunks: [
        { h: '谁', p: 'shéi' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '拍照', p: 'pāizhào' },
      ],
    },
    {
      ko: '누가 한자를 쓸 줄 알아요?',
      chunks: [
        { h: '谁', p: 'shéi' },

        { h: '会', p: 'huì' },
        { h: '写', p: 'xiě' },
        { h: '汉字', p: 'Hànzì' },
      ],
    },
  ],
  day10: [
    {
      ko: '오늘 비가 올 것이다.',
      chunks: [
        { h: '今天', p: 'jīntiān' },
        { h: '会', p: 'huì' },
        { h: '下雨', p: 'xià yǔ' },
      ],
    },
    {
      ko: '오늘 비가 오지 않을 것이다.',
      chunks: [
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '下雨', p: 'xià yǔ' },
      ],
    },
    {
      ko: '너는 성공할 것이다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '会', p: 'huì' },
        { h: '成功', p: 'chénggōng' },
      ],
    },
    {
      ko: '너는 성공하지 못할 것이다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '成功', p: 'chénggōng' },
      ],
    },
    {
      ko: '그들은 돌아올 것이다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '会', p: 'huì' },
        { h: '回来', p: 'huílái' },
      ],
    },
    {
      ko: '그들은 돌아오지 않을 것이다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '回来', p: 'huílái' },
      ],
    },
    {
      ko: '그녀는 이길 것이다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '会', p: 'huì' },
        { h: '赢', p: 'yíng' },
      ],
    },
    {
      ko: '그녀는 이기지 못할 것이다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '赢', p: 'yíng' },
      ],
    },
    {
      ko: '여러분은 한국어를 알아들을 수 있다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '能', p: 'néng' },
        { h: '听懂', p: 'tīngdǒng' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
    {
      ko: '여러분은 한국어를 알아들을 수 없다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '听懂', p: 'tīngdǒng' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
    {
      ko: '제 중국인 친구는 매운 것을 먹을 수 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '제 중국인 친구는 매운 것을 먹을 수 없다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '中国', p: 'zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '당신의 배우자는 문제를 해결할 것이다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '的', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '会', p: 'huì' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '당신의 배우자는 문제를 해결하지 못할 것이다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '的', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '不', p: 'bú' },
        { h: '会', p: 'huì' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '선생님은 500m를 수영할 수 있다.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '能', p: 'néng' },
        { h: '游', p: 'yóu' },
        { h: '五百', p: 'wǔbǎi' },
        { h: '米', p: 'mǐ' },
      ],
    },
    {
      ko: '선생님은 500m를 수영할 수 없다.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '游', p: 'yóu' },
        { h: '五百', p: 'wǔbǎi' },
        { h: '米', p: 'mǐ' },
      ],
    },
  ],
  day11: [
    {
      ko: '너 들어갈 수 있어?',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '能', p: 'néng' },
        { h: '进', p: 'jìn' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '너희들은 들어갈 수 없어.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '进', p: 'jìn' },
      ],
    },
    {
      ko: '이곳에 오실 수 있으신가요?',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '能', p: 'néng' },
        { h: '来', p: 'lái' },
        { h: '这儿', p: 'zhèr' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '오늘 수업하실 수 없으세요.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '上课', p: 'shàngkè' },
      ],
    },
    {
      ko: '그는 나갈 수 있나요?',
      chunks: [
        { h: '他', p: 'tā' },
        { h: '能', p: 'néng' },
        { h: '出去', p: 'chūqù' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그들은 오늘 나갈 수 없어요.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '出去', p: 'chūqù' },
      ],
    },
    {
      ko: '그녀는 나를 도와줄 수 있나요?',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '能', p: 'néng' },
        { h: '帮', p: 'bāng' },
        { h: '我', p: 'wǒ' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '그녀는 오늘 나를 도와줄 수 없어요.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '帮', p: 'bāng' },
        { h: '我', p: 'wǒ' },
      ],
    },
    {
      ko: '선생님은 도착하실 수 있나요?',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '能', p: 'néng' },
        { h: '到', p: 'dào' },
        { h: '吗', p: 'ma' },
      ],
    },
    {
      ko: '선생님은 오늘 도착하실 수 없어요.',
      chunks: [
        { h: '老师', p: 'lǎoshī' },
        { h: '今天', p: 'jīntiān' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '到', p: 'dào' },
      ],
    },
    {
      ko: '여러분은 한자를 이해할 수 없어요.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '看懂', p: 'kàndǒng' },
        { h: '汉字', p: 'hànzì' },
      ],
    },
    {
      ko: '제 배우자는 숙제를 끝낼 수 있어요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '爱人', p: 'àiren' },
        { h: '能', p: 'néng' },
        { h: '完成', p: 'wánchéng' },
        { h: '作业', p: 'zuòyè' },
      ],
    },
    {
      ko: '제 중국인 친구는 문제를 해결할 수 없어요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '中国', p: 'Zhōngguó' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '解决', p: 'jiějué' },
        { h: '问题', p: 'wèntí' },
      ],
    },
  ],

  day12: [
    {
      ko: '아이는 텔레비전을 보면 안 된다.',
      chunks: [
        { h: '孩子', p: 'háizi' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '看', p: 'kàn' },
        { h: '电视', p: 'diànshì' },
      ],
    },
    {
      ko: '당신(존칭)은 술을 마시면 안 됩니다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '喝', p: 'hē' },
        { h: '酒', p: 'jiǔ' },
      ],
    },
    {
      ko: '그들은 간식을 먹으면 안 된다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bù' },
        { h: '能', p: 'néng' },
        { h: '吃', p: 'chī' },
        { h: '零食', p: 'língshí' },
      ],
    },
    {
      ko: '그녀들은 충분히 해낼 수 있다.',
      chunks: [
        { h: '她们', p: 'tāmen' },
        { h: '能够', p: 'nénggòu' },
        { h: '做到', p: 'zuòdào' },
      ],
    },
    {
      ko: '모두 충분히 성공할 수 있다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '能够', p: 'nénggòu' },
        { h: '成功', p: 'chénggōng' },
      ],
    },
    {
      ko: '나의 친구는 이 문제를 충분히 해결할 수 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '朋友', p: 'péngyou' },
        { h: '能够', p: 'nénggòu' },
        { h: '解决', p: 'jiějué' },
        { h: '这个', p: 'zhège' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '나의 남편은 너를 데리러 갈 수 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '老公', p: 'lǎogōng' },
        { h: '可以', p: 'kěyǐ' },
        { h: '接', p: 'jiē' },
        { h: '你', p: 'nǐ' },
      ],
    },
    {
      ko: '나의 남편은 너를 데리러 가면 안 된다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '老公', p: 'lǎogōng' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '接', p: 'jiē' },
        { h: '你', p: 'nǐ' },
      ],
    },
    {
      ko: '나의 아내는 너를 데리러 갈 수 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '老婆', p: 'lǎopo' },
        { h: '可以', p: 'kěyǐ' },
        { h: '接', p: 'jiē' },
        { h: '你', p: 'nǐ' },
      ],
    },
    {
      ko: '나의 아내는 너를 데리러 가면 안 된다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '老婆', p: 'lǎopo' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '接', p: 'jiē' },
        { h: '你', p: 'nǐ' },
      ],
    },
    {
      ko: '너희는 여기에 앉아도 된다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '可以', p: 'kěyǐ' },
        { h: '坐', p: 'zuò' },
        { h: '这儿', p: 'zhèr' },
      ],
    },
    {
      ko: '너희는 여기에 앉으면 안 된다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '坐', p: 'zuò' },
        { h: '这里', p: 'zhèlǐ' },
      ],
    },
  ],

  day13: [
    {
      ko: '당신은 주차해도 됩니다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '可以', p: 'kěyǐ' },
        { h: '停车', p: 'tíngchē' },
      ],
    },
    {
      ko: '당신은 주차하면 안 됩니다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '停车', p: 'tíngchē' },
      ],
    },
    {
      ko: '여러분은 한번 시도해 볼 수 있습니다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '可以', p: 'kěyǐ' },
        { h: '试', p: 'shì' },
        { h: '一下', p: 'yíxià' },
      ],
    },
    {
      ko: '여러분은 함부로 시도하면 안 됩니다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '试', p: 'shì' },
        { h: '一下', p: 'yíxià' },
      ],
    },
    {
      ko: '그들은 질문할 수 있습니다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '可以', p: 'kěyǐ' },
        { h: '问', p: 'wèn' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '그들은 질문하면 안 됩니다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '问', p: 'wèn' },
        { h: '问题', p: 'wèntí' },
      ],
    },
    {
      ko: '그녀들은 휴대폰을 가져와도 됩니다.',
      chunks: [
        { h: '她们', p: 'tāmen' },
        { h: '可以', p: 'kěyǐ' },
        { h: '带', p: 'dài' },
        { h: '手机', p: 'shǒujī' },
      ],
    },
    {
      ko: '그녀들은 휴대폰을 가져오면 안 됩니다.',
      chunks: [
        { h: '她们', p: 'tāmen' },
        { h: '不', p: 'bù' },
        { h: '可以', p: 'kěyǐ' },
        { h: '带', p: 'dài' },
        { h: '手机', p: 'shǒujī' },
      ],
    },
    {
      ko: '저는 중국에 갈 것입니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '要', p: 'yào' },
        { h: '去', p: 'qù' },
        { h: '中国', p: 'Zhōngguó' },
      ],
    },
    {
      ko: '저는 중국에 가고 싶지 않습니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '去', p: 'qù' },
        { h: '中国', p: 'Zhōngguó' },
      ],
    },
    {
      ko: '모두 출근해야 합니다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '要', p: 'yào' },
        { h: '上班', p: 'shàngbān' },
      ],
    },
    {
      ko: '모두 출근하고 싶지 않습니다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '上班', p: 'shàngbān' },
      ],
    },
    {
      ko: '제 남편은 살을 빼려고 합니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '的', p: 'de' },
        { h: '老公', p: 'lǎogōng' },
        { h: '要', p: 'yào' },
        { h: '减肥', p: 'jiǎnféi' },
      ],
    },
    {
      ko: '제 남편은 살을 빼고 싶어 하지 않습니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '老公', p: 'lǎogōng' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '减肥', p: 'jiǎnféi' },
      ],
    },
    {
      ko: '제 아내는 살을 빼려고 합니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '老婆', p: 'lǎopó' },
        { h: '要', p: 'yào' },
        { h: '减肥', p: 'jiǎnféi' },
      ],
    },
    {
      ko: '제 아내는 살을 빼고 싶어 하지 않습니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '老婆', p: 'lǎopó' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '减肥', p: 'jiǎnféi' },
      ],
    },
    {
      ko: '제 친구는 한국어를 공부할 것입니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '朋友', p: 'péngyou' },
        { h: '要', p: 'yào' },
        { h: '学习', p: 'xuéxí' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
    {
      ko: '제 친구는 한국어를 공부하고 싶어 하지 않습니다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '의', p: 'de' },
        { h: '朋友', p: 'péngyou' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '学习', p: 'xuéxí' },
        { h: '韩语', p: 'Hányǔ' },
      ],
    },
  ],
  day14: [
    {
      ko: '저는 병원에 가야 해요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '要', p: 'yào' },
        { h: '去', p: 'qù' },
        { h: '医院', p: 'yīyuàn' },
      ],
    },
    {
      ko: '우리는 계속 연락해야 해요.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '要', p: 'yào' },
        { h: '保持', p: 'bǎochí' },
        { h: '联系', p: 'liánxì' },
      ],
    },
    {
      ko: '너희들은 따뜻한 물을 많이 마셔야 해요.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '要', p: 'yào' },
        { h: '多', p: 'duō' },
        { h: '喝', p: 'hē' },
        { h: '热水', p: 'rèshuǐ' },
      ],
    },
    {
      ko: '그들은 많이 연습해야 해요.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '要', p: 'yào' },
        { h: '多', p: 'duō' },
        { h: '练习', p: 'liànxí' },
      ],
    },
    {
      ko: '저는 한번 입어 보고 싶어요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '想', p: 'xiǎng' },
        { h: '试穿', p: 'shìchuān' },
        { h: '一下', p: 'yíxià' },
      ],
    },
    {
      ko: '저는 입어 보고 싶지 않아요.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '试穿', p: 'shìchuān' },
      ],
    },
    {
      ko: '우리는 찬물을 마시고 싶어요.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '想', p: 'xiǎng' },
        { h: '喝', p: 'hē' },
        { h: '冰水', p: 'bīngshuǐ' },
      ],
    },
    {
      ko: '우리는 찬물을 마시고 싶지 않아요.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '喝', p: 'hē' },
        { h: '冰水', p: 'bīngshuǐ' },
      ],
    },
    {
      ko: '무엇을 드시고 싶으세요?',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '想', p: 'xiǎng' },
        { h: '吃', p: 'chī' },
        { h: '什么', p: 'shénme' },
      ],
    },
    {
      ko: '무엇을 드시고 싶지 않으세요?',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '不', p: 'bù' },
        { h: '想', p: 'xiǎng' },
        { h: '吃', p: 'chī' },
        { h: '什么', p: 'shénme' },
      ],
    },
  ],

  day15: [
    {
      ko: '당신은 몸을 단련해야 합니다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '应该', p: 'yīnggāi' },
        { h: '锻炼', p: 'duànliàn' },
        { h: '身体', p: 'shēntǐ' },
      ],
    },
    {
      ko: '너희는 좀 일찍 집에 가야 한다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '应该', p: 'yīnggāi' },
        { h: '早点', p: 'zǎodiǎn' },
        { h: '回', p: 'huí' },
        { h: '家', p: 'jiā' },
      ],
    },
    {
      ko: '그들은 규칙을 지켜야 한다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '应该', p: 'yīnggāi' },
        { h: '遵守', p: 'zūnshǒu' },
        { h: '规则', p: 'guīzé' },
      ],
    },
    {
      ko: '모두 환경을 보호해야 한다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '应该', p: 'yīnggāi' },
        { h: '保护', p: 'bǎohù' },
        { h: '环境', p: 'huánjìng' },
      ],
    },
    {
      ko: '너는 사람을 속이면 안 된다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '不', p: 'bù' },
        { h: '应该', p: 'yīnggāi' },
        { h: '骗', p: 'piàn' },
        { h: '人', p: 'rén' },
      ],
    },
    {
      ko: '너희는 사람을 때리면 안 된다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '不', p: 'bù' },
        { h: '应该', p: 'yīnggāi' },
        { h: '打', p: 'dǎ' },
        { h: '人', p: 'rén' },
      ],
    },
    {
      ko: '그들은 사람에게 욕하면 안 된다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bù' },
        { h: '应该', p: 'yīnggāi' },
        { h: '骂', p: 'mà' },
        { h: '人', p: 'rén' },
      ],
    },
    {
      ko: '모두 다른 사람을 괴롭히면 안 된다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '应该', p: 'yīnggāi' },
        { h: '欺负', p: 'qīfu' },
        { h: '别人', p: 'biérén' },
      ],
    },
  ],
  day16: [
    {
      ko: '나는 열심히 공부해야 한다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '得', p: 'děi' },
        { h: '认真', p: 'rènzhēn' },
        { h: '学习', p: 'xuéxí' },
      ],
    },
    {
      ko: '우리는 물을 많이 마셔야 한다.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '得', p: 'děi' },
        { h: '多', p: 'duō' },
        { h: '喝', p: 'hē' },
        { h: '水', p: 'shuǐ' },
      ],
    },
    {
      ko: '너는 제시간에 약을 먹어야 한다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '得', p: 'děi' },
        { h: '按时', p: 'ànshí' },
        { h: '吃', p: 'chī' },
        { h: '药', p: 'yào' },
      ],
    },
    {
      ko: '그들은 시험을 준비해야 한다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '得', p: 'děi' },
        { h: '准备', p: 'zhǔnbèi' },
        { h: '考试', p: 'kǎoshì' },
      ],
    },
    {
      ko: '나는 혼자 가도 좋다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '愿意', p: 'yuànyì' },
        { h: '一个人', p: 'yí ge rén' },
        { h: '去', p: 'qù' },
      ],
    },
    {
      ko: '나는 혼자 가고 싶지 않다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bú' },
        { h: '愿意', p: 'yuànyì' },
        { h: '一个人', p: 'yí ge rén' },
        { h: '去', p: 'qù' },
      ],
    },
    {
      ko: '우리는 한번 해볼 의향이 있다.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '愿意', p: 'yuànyì' },
        { h: '试', p: 'shì' },
        { h: '一试', p: 'yi shì' },
      ],
    },
    {
      ko: '우리는 한번 해보고 싶지 않다.',
      chunks: [
        { h: '我们', p: 'wǒmen' },
        { h: '不', p: 'bú' },
        { h: '愿意', p: 'yuànyì' },
        { h: '试', p: 'shì' },
        { h: '一试', p: 'yi shì' },
      ],
    },
    {
      ko: '그녀는 이 일을 말할 의향이 있다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '愿意', p: 'yuànyì' },
        { h: '说', p: 'shuō' },
        { h: '这', p: 'zhè' },
        { h: '件事', p: 'jiàn shì' },
      ],
    },
    {
      ko: '그녀는 이 일을 말하고 싶어 하지 않는다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '不', p: 'bú' },
        { h: '愿意', p: 'yuànyì' },
        { h: '说', p: 'shuō' },
        { h: '这', p: 'zhè' },
        { h: '件事', p: 'jiàn shì' },
      ],
    },
    {
      ko: '아이는 스스로 밥을 먹으려고 한다.',
      chunks: [
        { h: '孩子', p: 'háizi' },
        { h: '愿意', p: 'yuànyì' },
        { h: '自己', p: 'zìjǐ' },
        { h: '吃饭', p: 'chīfàn' },
      ],
    },
    {
      ko: '아이는 스스로 밥을 먹으려고 하지 않는다.',
      chunks: [
        { h: '孩子', p: 'háizi' },
        { h: '不', p: 'bú' },
        { h: '愿意', p: 'yuànyì' },
        { h: '自己', p: 'zìjǐ' },
        { h: '吃饭', p: 'chīfàn' },
      ],
    },
  ],
  day17: [
    {
      ko: '나는 물어볼 용기가 있다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '敢', p: 'gǎn' },
        { h: '问', p: 'wèn' },
      ],
    },
    {
      ko: '나는 감히 묻지 못한다.',
      chunks: [
        { h: '我', p: 'wǒ' },
        { h: '不', p: 'bù' },
        { h: '敢', p: 'gǎn' },
        { h: '问', p: 'wèn' },
      ],
    },
    {
      ko: '너는 롤러코스터를 탈 용기가 있다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '敢', p: 'gǎn' },
        { h: '坐', p: 'zuò' },
        { h: '过山车', p: 'guòshānchē' },
      ],
    },
    {
      ko: '너는 무서워서 롤러코스터를 타지 못한다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '不', p: 'bù' },
        { h: '敢', p: 'gǎn' },
        { h: '坐', p: 'zuò' },
        { h: '过山车', p: 'guòshānchē' },
      ],
    },
    {
      ko: '그들은 매운 음식을 먹을 엄두가 난다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '敢', p: 'gǎn' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '그들은 매운 음식을 먹을 엄두가 나지 않는다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '不', p: 'bù' },
        { h: '敢', p: 'gǎn' },
        { h: '吃', p: 'chī' },
        { h: '辣', p: 'là' },
        { h: '的', p: 'de' },
      ],
    },
    {
      ko: '그녀는 혼자 갈 용기가 있다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '敢', p: 'gǎn' },
        { h: '一', p: 'yí' },
        { h: '个', p: 'ge' },
        { h: '人', p: 'rén' },
        { h: '去', p: 'qù' },
      ],
    },
    {
      ko: '그녀는 혼자 갈 용기가 없다.',
      chunks: [
        { h: '她', p: 'tā' },
        { h: '不', p: 'bù' },
        { h: '敢', p: 'gǎn' },
        { h: '一', p: 'yí' },
        { h: '个', p: 'ge' },
        { h: '人', p: 'rén' },
        { h: '去', p: 'qù' },
      ],
    },
    {
      ko: '당신은 반드시 약을 드셔야 합니다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '必须', p: 'bìxū' },
        { h: '吃', p: 'chī' },
        { h: '药', p: 'yào' },
      ],
    },
    {
      ko: '여러분은 반드시 나에게 자신의 생각을 알려줘야 합니다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '必须', p: 'bìxū' },
        { h: '告诉', p: 'gàosu' },
        { h: '我', p: 'wǒ' },
        { h: '自己', p: 'zìjǐ' },
        { h: '的', p: 'de' },
        { h: '想法', p: 'xiǎngfǎ' },
      ],
    },
    {
      ko: '그들은 반드시 숙제를 다 해야 합니다.',
      chunks: [
        { h: '他们', p: 'tāmen' },
        { h: '必须', p: 'bìxū' },
        { h: '做完', p: 'zuòwán' },
        { h: '作业', p: 'zuòyè' },
      ],
    },
    {
      ko: '여러분은 반드시 안전벨트를 매야 합니다.',
      chunks: [
        { h: '你们', p: 'nǐmen' },
        { h: '必须', p: 'bìxū' },
        { h: '系', p: 'jì' },
        { h: '安全带', p: 'ānquándài' },
      ],
    },
  ],
  day18: [
    {
      ko: '이곳은 가 볼 만하다.',
      chunks: [
        { h: '这', p: 'zhè' },
        { h: '个', p: 'ge' },
        { h: '地方', p: 'dìfang' },
        { h: '值得', p: 'zhíde' },
        { h: '去', p: 'qù' },
      ],
    },
    {
      ko: '이 식당은 추천할 만하다.',
      chunks: [
        { h: '这', p: 'zhè' },
        { h: '家', p: 'jiā' },
        { h: '餐厅', p: 'cāntīng' },
        { h: '值得', p: 'zhíde' },
        { h: '推荐', p: 'tuījiàn' },
      ],
    },
    {
      ko: '이 옷은 살 만하다.',
      chunks: [
        { h: '这', p: 'zhè' },
        { h: '件', p: 'jiàn' },
        { h: '衣服', p: 'yīfu' },
        { h: '值得', p: 'zhíde' },
        { h: '买', p: 'mǎi' },
      ],
    },
    {
      ko: '이 영화는 볼 만하다.',
      chunks: [
        { h: '这', p: 'zhè' },
        { h: '部', p: 'bù' },
        { h: '电影', p: 'diànyǐng' },
        { h: '值得', p: 'zhíde' },
        { h: '看', p: 'kàn' },
      ],
    },
    {
      ko: '당신은 속상해할 필요가 없다.',
      chunks: [
        { h: '您', p: 'nín' },
        { h: '不', p: 'bù' },
        { h: '值得', p: 'zhíde' },
        { h: '难过', p: 'nánguò' },
      ],
    },
    {
      ko: '모두 이 경기를 볼 필요가 없다.',
      chunks: [
        { h: '大家', p: 'dàjiā' },
        { h: '不', p: 'bù' },
        { h: '值得', p: 'zhíde' },
        { h: '看', p: 'kàn' },
        { h: '这', p: 'zhè' },
        { h: '场', p: 'chǎng' },
        { h: '比赛', p: 'bǐsài' },
      ],
    },
    {
      ko: '너는 그와 싸울 필요가 없다.',
      chunks: [
        { h: '你', p: 'nǐ' },
        { h: '不', p: 'bù' },
        { h: '值得', p: 'zhíde' },
        { h: '跟', p: 'gēn' },
        { h: '他', p: 'tā' },
        { h: '吵架', p: 'chǎojià' },
      ],
    },
    {
      ko: '이미 지나간 일은 후회할 필요가 없다.',
      chunks: [
        { h: '已经', p: 'yǐjing' },
        { h: '过去', p: 'guòqù' },
        { h: '的', p: 'de' },
        { h: '事情', p: 'shìqing' },
        { h: '不', p: 'bù' },
        { h: '值得', p: 'zhíde' },
        { h: '后悔', p: 'hòuhuǐ' },
      ],
    },
  ],
};

let rawSentenceData = [];
let gameQueue = [];
let currentIdx = 0;
let score = 0;
let timeLeft = 20;
let timerInterval;
let selectedChunks = [];
let answerOrder = [];
let timerSound, correctSound, wrongSound;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedDay = urlParams.get('day');
  if (!selectedDay || !allSentenceData['day' + selectedDay]) {
    alert('데이터를 불러올 수 없습니다. 로비로 돌아갑니다.');
    location.href = 'index.html';
    return;
  }
  rawSentenceData = allSentenceData['day' + selectedDay];
  const titleTag = document.querySelector('.apt-tag');
  if (titleTag) titleTag.innerText = `STEP 2 - Day ${selectedDay}`;
};

/* ============================================================
   🔥 [안드로이드 마스터 키] 터치 시 모든 오디오 제약 강제 해제
   ============================================================ */
let isAudioUnlocked = false;
window.addEventListener(
  'touchstart',
  function () {
    if (isAudioUnlocked) return;

    ['timer-sound', 'correct-sound', 'wrong-sound'].forEach((id) => {
      const audio = document.getElementById(id);
      if (audio) {
        audio
          .play()
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch(() => {});
      }
    });

    // TTS 엔진 먹통 방지를 위해 공백문자를 볼륨 0으로 쏩니다.
    if ('speechSynthesis' in window) {
      let msg = new SpeechSynthesisUtterance(' ');
      msg.volume = 0;
      window.speechSynthesis.speak(msg);
    }
    isAudioUnlocked = true;
  },
  { once: true },
);

/* ============================================================
   [효과음 재생 로직] 볼륨 1.0 강제 세팅
   ============================================================ */
function playEffect(audioElement) {
  if (!audioElement) return;
  try {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.volume = 1.0; // 볼륨 100% 명시
    audioElement.muted = false;
    audioElement.play().catch(() => {});
  } catch (e) {}
}

function startGame() {
  timerSound = document.getElementById('timer-sound');
  correctSound = document.getElementById('correct-sound');
  wrongSound = document.getElementById('wrong-sound');

  gameQueue = [...rawSentenceData].sort(() => 0.5 - Math.random()).slice(0, 20);
  currentIdx = 0;
  score = 0;

  document.getElementById('ko-sentence').innerText = '준비...';
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-board').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  if (currentIdx >= gameQueue.length) {
    endGame();
    return;
  }
  selectedChunks = [];
  document.getElementById('sentence-display').innerHTML = '';
  document.getElementById('feedback-msg').innerText = '';

  const data = gameQueue[currentIdx];
  document.getElementById('ko-sentence').innerText = data.ko;
  answerOrder = data.chunks.map((c) => c.h);

  const pool = document.getElementById('chunk-pool');
  pool.innerHTML = '';
  [...data.chunks]
    .sort(() => Math.random() - 0.5)
    .forEach((chunk) => {
      const card = document.createElement('div');
      card.className = 'chunk-card';
      card.setAttribute('tabindex', '-1');
      card.innerHTML = `<div class="cn-text">${chunk.h}</div><div class="pinyin-text">${chunk.p}</div>`;
      card.onclick = () => {
        card.blur();
        selectChunk(chunk, card);
      };
      pool.appendChild(card);
    });
  startTimer();
}

function selectChunk(chunk, cardElement) {
  if (cardElement.classList.contains('used')) return;
  cardElement.blur();
  cardElement.classList.add('used');
  selectedChunks.push(chunk.h);

  const display = document.getElementById('sentence-display');
  const selectedTag = document.createElement('div');
  selectedTag.className = 'selected-card';
  selectedTag.style.cursor = 'pointer';
  selectedTag.innerHTML = `<div class="hz-text">${chunk.h}</div><div class="py-text">${chunk.p}</div>`;
  selectedTag.onclick = function () {
    for (let i = selectedChunks.length - 1; i >= 0; i--) {
      if (selectedChunks[i] === chunk.h) {
        selectedChunks.splice(i, 1);
        break;
      }
    }
    this.remove();
    cardElement.classList.remove('used');
  };
  display.appendChild(selectedTag);

  // 🔥 딜레이 제로: 카드를 다 고르면 0초 만에 바로 정답 체크
  if (selectedChunks.length === answerOrder.length) {
    checkAnswer();
  }
}

function checkAnswer() {
  clearInterval(timerInterval);
  if (timerSound) timerSound.pause();

  const isCorrect =
    JSON.stringify(selectedChunks) === JSON.stringify(answerOrder);
  const fb = document.getElementById('feedback-msg');

  if (isCorrect) {
    // 효과음과 TTS를 동시에 정상 재생합니다.
    playEffect(correctSound);

    const currentQuestion = gameQueue[currentIdx];
    const fullSentence = currentQuestion.chunks
      .map((chunk) => chunk.h)
      .join('');
    const fullPinyin = currentQuestion.chunks.map((chunk) => chunk.p).join(' ');

    fb.innerText = '딩동댕! 잘하셨어요! 👏';
    fb.style.color = 'var(--correct)';

    // 🔥 딜레이 제로: 정답 즉시 팝업 띄우고 TTS 발사!
    showTTSPopup(fullSentence, fullPinyin);
  } else {
    playEffect(wrongSound);
    fb.innerText = '틀렸어요! 다시 맞춰보세요 🧐';
    fb.style.color = 'var(--wrong)';
    document.getElementById('sentence-display').classList.add('shake');
    setTimeout(() => {
      document.getElementById('sentence-display').classList.remove('shake');
      resetCurrentSentence();
    }, 1200);
  }
}

function resetCurrentSentence() {
  selectedChunks = [];
  document.getElementById('sentence-display').innerHTML = '';
  document.querySelectorAll('.chunk-card').forEach((c) => {
    c.classList.remove('used');
    c.blur();
  });
  document.getElementById('feedback-msg').innerText = '';
  startTimer();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 20;
  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) {
    timerDisplay.innerText = timeLeft;
    timerDisplay.style.color = 'var(--primary)';
  }

  if (timerSound) {
    timerSound.pause();
    timerSound.currentTime = 0;
    timerSound.volume = 1.0; // 🔥 타이머 볼륨 무조건 100% 시작
    timerSound.muted = false;
    timerSound.play().catch(() => {});
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    const currentDisplay = document.getElementById('timer');
    if (currentDisplay) {
      currentDisplay.innerText = timeLeft;
      if (timeLeft <= 5) currentDisplay.style.color = 'var(--wrong)';
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  if (timerSound) timerSound.pause();
  playEffect(wrongSound);
  document.getElementById('feedback-msg').innerText =
    '시간 초과! 다시 도전! ⏰';
  document.getElementById('feedback-msg').style.color = 'var(--wrong)';
  document.getElementById('sentence-display').classList.add('shake');
  setTimeout(() => {
    document.getElementById('sentence-display').classList.remove('shake');
    resetCurrentSentence();
  }, 1200);
}

function endGame() {
  clearInterval(timerInterval);
  if (timerSound) timerSound.pause();
  document.getElementById('game-board').style.display = 'none';
  const result = document.getElementById('result-screen');
  if (result) result.style.display = 'flex';
  document.getElementById('final-score').innerHTML =
    `오늘 배운 문장을 모두 마스터 했습니다.<br>(이 화면을 캡쳐해서 카톡방에 올려주세요!)`;
}

/* ============================================================
   [TTS & 팝업 기능] 딜레이 0초, 완전 동기화 버전
   ============================================================ */
let currentFullSentence = '';

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = function () {
      window.speechSynthesis.getVoices();
    };
  }
}

function createTTSPopup() {
  if (document.getElementById('tts-popup')) return;
  const overlay = document.createElement('div');
  overlay.id = 'tts-popup';
  overlay.className = 'tts-popup-overlay';
  overlay.style.display = 'none';
  overlay.innerHTML = `
    <div class="tts-popup-box">
      <div class="apt-tag" style="margin-bottom:15px; display:inline-block;">정답 확인</div>
      <div id="tts-popup-cn" class="tts-popup-cn"></div>
      <button id="py-toggle-btn" class="py-toggle-btn" onclick="togglePinyin()">👀 병음 보기</button>
      <div id="tts-popup-py" class="tts-popup-py"></div>
      <div class="tts-popup-btn-group">
        <button class="tts-btn tts-btn-listen" onclick="replayTTS()">🎧 다시 듣기</button>
        <button class="tts-btn tts-btn-next" onclick="closeTTSPopupAndNext()">▶ 다음 문제</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

window.togglePinyin = function () {
  const pyDiv = document.getElementById('tts-popup-py');
  const pyBtn = document.getElementById('py-toggle-btn');
  if (pyDiv.style.display === 'none' || pyDiv.style.display === '') {
    pyDiv.style.display = 'block';
    pyBtn.innerText = '🙈 병음 숨기기';
  } else {
    pyDiv.style.display = 'none';
    pyBtn.innerText = '👀 병음 보기';
  }
};

window.playTTS = function (text) {
  if (!('speechSynthesis' in window)) return;
  try {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  } catch (e) {}

  window.activeUtterance = new SpeechSynthesisUtterance(text);
  window.activeUtterance.lang = 'zh-CN';
  window.activeUtterance.rate = 0.65;
  window.activeUtterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const femaleVoice = voices.find(
      (v) =>
        v.lang.includes('zh-CN') &&
        (v.name.includes('Xiaoxiao') ||
          v.name.includes('Google') ||
          v.name.includes('Female')),
    );
    const defaultZhVoice = voices.find((v) => v.lang.includes('zh-CN'));
    if (femaleVoice) {
      window.activeUtterance.voice = femaleVoice;
    } else if (defaultZhVoice) {
      window.activeUtterance.voice = defaultZhVoice;
    }
  }

  // 🔥 딜레이 완전 삭제: 0.1초도 기다리지 않고 터치 시점에 맞춰 100% 즉시 재생
  try {
    window.speechSynthesis.speak(window.activeUtterance);
  } catch (e) {
    console.error(e);
  }
};

window.replayTTS = function () {
  window.playTTS(currentFullSentence);
};

window.showTTSPopup = function (text, pinyin) {
  createTTSPopup();
  currentFullSentence = text;
  document.getElementById('tts-popup-cn').innerText = text;
  document.getElementById('tts-popup-py').innerText = pinyin;

  document.getElementById('tts-popup-py').style.display = 'none';
  document.getElementById('py-toggle-btn').innerText = '👀 병음 보기';

  const popup = document.getElementById('tts-popup');
  if (popup) {
    popup.style.display = 'flex';
    popup.classList.add('active');
  }

  window.playTTS(text);
};

window.closeTTSPopupAndNext = function () {
  try {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
  } catch (e) {}
  const popup = document.getElementById('tts-popup');
  if (popup) {
    popup.classList.remove('active');
    popup.style.display = 'none';
  }

  score++;
  if (document.getElementById('score'))
    document.getElementById('score').innerText = score;
  currentIdx++;
  loadQuestion();
};
