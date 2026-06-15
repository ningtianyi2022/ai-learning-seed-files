import { db } from '../index';
import { courses, chapters, sections, contentBlocks } from '../schema';

// L4课程：自然语言处理与Transformer
const l4Course = {
  id: 'l4-nlp-transformer',
  title: '自然语言处理与Transformer',
  level: 4,
  description: '深入学习NLP、Transformer、大语言模型。适合有深度学习基础、想学习NLP和LLM的开发者。',
  thumbnail: 'https://example.com/thumbnails/l4-nlp-transformer.jpg',
  totalDuration: 18000, // 50小时
  tags: ['NLP', 'Transformer', 'BERT', 'GPT', '大语言模型'],
};

const l4Chapters = [
  // 第1章：NLP基础
  {
    id: 'l4-ch1',
    title: '第1章：NLP基础',
    description: '理解NLP的基本概念，掌握文本预处理、词嵌入等技术',
    order: 1,
    sections: [
      {
        id: 'l4-ch1-sec1',
        title: '1.1 文本预处理',
        description: '学习文本清洗、分词、去除停用词等预处理技术',
        order: 1,
        duration: 1800,
        content: `
# 1.1 文本预处理

## 学习目标

通过本节学习，你将能够：
- 理解文本预处理的重要性
- 掌握文本清洗、分词、去除停用词等技术
- 使用NLTK、spaCy等工具进行文本预处理
- 了解中文分词的特殊性

---

## 1.1.1 为什么需要文本预处理？

**问题**：
- 原始文本包含噪声（标点符号、特殊字符、停用词等）
- 计算机无法直接理解文本
- 需要将文本转换为数值形式

**解决方案**：文本预处理
- 清洗文本
- 分词（Tokenization）
- 去除停用词
- 词形还原（Lemmatization）/词干提取（Stemming）
- 转换为数值表示

## 1.1.2 文本预处理的步骤

### 1. 文本清洗（Text Cleaning）

**任务**：
- 去除HTML标签
- 去除标点符号
- 去除特殊字符
- 转换为小写

**代码示例**（使用正则表达式）：

\`\`\`python
import re

def clean_text(text):
    # 去除HTML标签
    text = re.sub(r'<[^>]+>', '', text)
    # 去除标点符号和特殊字符
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    # 转换为小写
    text = text.lower()
    return text

text = "<p>Hello, World! This is a test.</p>"
cleaned_text = clean_text(text)
print(cleaned_text)  # hello world this is a test
\`\`\`

### 2. 分词（Tokenization）

**任务**：将文本分割成单词或子词

**英文分词**（使用NLTK）：

\`\`\`python
import nltk
from nltk.tokenize import word_tokenize

text = "Hello, world! This is a test."
tokens = word_tokenize(text)
print(tokens)  # ['Hello', ',', 'world', '!', 'This', 'is', 'a', 'test', '.']
\`\`\`

**中文分词**（使用jieba）：

\`\`\`python
import jieba

text = "我爱自然语言处理"
tokens = jieba.lcut(text)
print(tokens)  # ['我', '爱', '自然语言处理']
\`\`\`

### 3. 去除停用词（Stop Words Removal）

**停用词**：在文本中频繁出现但对语义贡献不大的词（如：the, is, at, which）

**代码示例**（使用NLTK）：

\`\`\`python
from nltk.corpus import stopwords
import nltk

nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

text = "This is a simple example of stop words removal."
tokens = word_tokenize(text)
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
print(filtered_tokens)  # ['simple', 'example', 'stop', 'words', 'removal', '.']
\`\`\`

### 4. 词形还原和词干提取

**词形还原（Lemmatization）**：将单词还原为原型（如：running → run, better → good）

**词干提取（Stemming）**：将单词还原为词根（如：running → run, better → bett）

**代码示例**：

\`\`\`python
from nltk.stem import WordNetLemmatizer, PorterStemmer

# 词形还原
lemmatizer = WordNetLemmatizer()
print(lemmatizer.lemmatize('running', pos='v'))  # run
print(lemmatizer.lemmatize('better', pos='a'))   # good

# 词干提取
stemmer = PorterStemmer()
print(stemmer.stem('running'))  # run
print(stemmer.stem('better'))   # better（词干提取可能不准确）
\`\`\`

## 1.1.3 使用spaCy进行文本预处理

**spaCy**是一个强大的NLP库，集成了多种预处理功能。

**代码示例**：

\`\`\`python
import spacy

# 加载英文模型
nlp = spacy.load('en_core_web_sm')

text = "Apple is looking at buying U.K. startup for $1 billion."
doc = nlp(text)

# 分词
tokens = [token.text for token in doc]
print(tokens)

# 去除停用词和标点符号
filtered_tokens = [token.text for token in doc if not token.is_stop and not token.is_punct]
print(filtered_tokens)

# 词形还原
lemmas = [token.lemma_ for token in doc]
print(lemmas)
\`\`\`

## 1.1.4 中文文本预处理

**挑战**：
- 中文没有空格分隔单词
- 需要专门的分词工具

**工具**：
- **jieba**：最常用的中文分词工具
- **pkuseg**：北京大学开发的分词工具
- **THULAC**：清华大学开发的分词工具

**代码示例**（使用jieba）：

\`\`\`python
import jieba
import re

def clean_chinese_text(text):
    # 去除标点符号和特殊字符
    text = re.sub(r'[^\u4e00-\u9fa5\s]', '', text)
    return text

def tokenize_chinese_text(text):
    # 分词
    tokens = jieba.lcut(text)
    # 去除停用词（需要自己准备中文停用词表）
    stop_words = set(['的', '了', '在', '是', '我', '有', '和', '就', '不', '人', '都', '一', '一个', '上', '也', '很', '到', '说', '要', '去', '你', '会', '着', '没有', '看', '好', '自己', '这'])
    filtered_tokens = [token for token in tokens if token not in stop_words]
    return filtered_tokens

text = "我爱自然语言处理！这是一个很好的工具。"
cleaned_text = clean_chinese_text(text)
tokens = tokenize_chinese_text(cleaned_text)
print(tokens)  # ['我', '爱', '自然语言处理', '这是', '一个', '很', '好', '工具']
\`\`\`

---

## 实战练习

### 练习1：英文文本预处理

**任务**：
1. 使用NLTK对一段英文文本进行预处理
2. 包括：文本清洗、分词、去除停用词、词形还原

### 练习2：中文文本预处理

**任务**：
1. 使用jieba对一段中文文本进行预处理
2. 包括：文本清洗、分词、去除停用词

---

## 本章小结

在本节中，我们学习了：
1. **文本预处理的重要性**：清洗噪声，转换为数值形式
2. **文本预处理的步骤**：清洗、分词、去除停用词、词形还原
3. **工具**：NLTK、spaCy、jieba
4. **中英文预处理的差异**

**关键要点**：
- 文本预处理是NLP的基础
- 英文有空格分隔，中文需要分词
- 选择合适的工具可以提高效率

**下一节预告**：我们将学习词嵌入（Word Embedding）。

---

**恭喜你完成了第1章第1节！** 🎉
        `
      },
      {
        id: 'l4-ch1-sec2',
        title: '1.2 词嵌入（Word Embedding）',
        description: '学习词嵌入技术，包括Word2Vec、GloVe、FastText等',
        order: 2,
        duration: 1800,
        content: `
# 1.2 词嵌入（Word Embedding）

## 学习目标

通过本节学习，你将能够：
- 理解词嵌入的原理
- 掌握Word2Vec、GloVe、FastText等算法
- 使用预训练的词嵌入模型
- 了解词嵌入的应用场景

---

## 1.2.1 什么是词嵌入？

**问题**：
- 计算机无法直接理解单词
- 需要将单词转换为数值形式

**解决方案**：词嵌入（Word Embedding）
- 将单词映射到连续的向量空间
- 语义相似的单词在向量空间中距离较近

**示例**：
- king - man + woman ≈ queen
- 词嵌入可以捕捉语义关系

## 1.2.2 常用的词嵌入算法

### 1. Word2Vec

**原理**：
- 使用神经网络学习词嵌入
- 两种模型：
  - **CBOW**（Continuous Bag of Words）：根据上下文预测中心词
  - **Skip-gram**：根据中心词预测上下文

**代码示例**（使用Gensim）：

\`\`\`python
from gensim.models import Word2Vec

# 准备语料
sentences = [
    ['this', 'is', 'a', 'sentence'],
    ['this', 'is', 'another', 'sentence']
]

# 训练Word2Vec模型
model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

# 获取词向量
vector = model.wv['sentence']
print(vector.shape)  # (100,)

# 找相似词
similar_words = model.wv.most_similar('sentence', topn=5)
print(similar_words)
\`\`\`

### 2. GloVe

**原理**：
- 基于全局词频统计
- 训练目标：词的共现概率比

**使用预训练的GloVe词嵌入**：

\`\`\`python
import numpy as np

# 加载预训练的GloVe词嵌入
def load_glove_embeddings(glove_file):
    embeddings = {}
    with open(glove_file, 'r', encoding='utf-8') as f:
        for line in f:
            values = line.split()
            word = values[0]
            vector = np.asarray(values[1:], dtype='float32')
            embeddings[word] = vector
    return embeddings

embeddings = load_glove_embeddings('glove.6B.100d.txt')
vector = embeddings['sentence']
print(vector.shape)  # (100,)
\`\`\`

### 3. FastText

**原理**：
- 基于子词（subword）的嵌入
- 可以处理未登录词（out-of-vocabulary words）

**代码示例**（使用Gensim）：

\`\`\`python
from gensim.models import FastText

# 准备语料
sentences = [
    ['this', 'is', 'a', 'sentence'],
    ['this', 'is', 'another', 'sentence']
]

# 训练FastText模型
model = FastText(sentences, vector_size=100, window=5, min_count=1, workers=4)

# 获取词向量
vector = model.wv['sentence']
print(vector.shape)  # (100,)

# FastText可以处理未登录词
vector = model.wv['sentencer']  # 未登录词
print(vector.shape)  # (100,)
\`\`\`

## 1.2.3 使用预训练的词嵌入模型

**常用的预训练词嵌入模型**：
- **Word2Vec**：Google提供的预训练模型
- **GloVe**：Stanford提供的预训练模型
- **FastText**：Facebook提供的预训练模型

**在PyTorch中使用预训练词嵌入**：

\`\`\`python
import torch
import torch.nn as nn

# 假设我们已经有了词嵌入矩阵（从预训练模型加载）
embedding_matrix = torch.randn(10000, 100)  # 10000个词，每个词100维

# 创建嵌入层
embedding_layer = nn.Embedding.from_pretrained(embedding_matrix, freeze=False)

# 使用嵌入层
input_ids = torch.LongTensor([[1, 2, 3], [4, 5, 6]])  # 词的ID
embeddings = embedding_layer(input_ids)
print(embeddings.shape)  # torch.Size([2, 3, 100])
\`\`\`

## 1.2.4 词嵌入的应用场景

**应用**：
1. **文本分类**：将文本转换为词嵌入，然后输入分类器
2. **情感分析**：使用词嵌入捕捉情感信息
3. **机器翻译**：将源语言和目标语言的词映射到同一空间
4. **推荐系统**：使用词嵌入表示用户和物品

---

## 实战练习

### 练习1：训练Word2Vec模型

**任务**：
1. 使用Gensim训练一个Word2Vec模型
2. 在自定义数据集上训练
3. 测试词向量的质量（找相似词）

### 练习2：使用预训练的GloVe词嵌入

**任务**：
1. 加载预训练的GloVe词嵌入
2. 在文本分类任务上使用
3. 对比使用和不使用预训练词嵌入的性能

---

## 本章小结

在本节中，我们学习了：
1. **词嵌入的原理**：将单词映射到向量空间
2. **常用算法**：Word2Vec、GloVe、FastText
3. **使用预训练模型**：加载和使用预训练词嵌入
4. **应用场景**：文本分类、情感分析等

**关键要点**：
- 词嵌入可以捕捉语义关系
- 预训练词嵌入可以提升模型性能
- FastText可以处理未登录词

**下一节预告**：我们将学习循环神经网络（RNN）。

---

**恭喜你完成了第1章第2节！** 🎉
        `
      }
    ]
  },
  
  // 第2章：循环神经网络与注意力机制
  {
    id: 'l4-ch2',
    title: '第2章：循环神经网络与注意力机制',
    description: '理解RNN、LSTM、GRU，掌握注意力机制',
    order: 2,
    sections: [
      {
        id: 'l4-ch2-sec1',
        title: '2.1 循环神经网络（RNN）',
        description: '理解RNN的原理，掌握RNN的训练方法',
        order: 1,
        duration: 1800,
        content: `
# 2.1 循环神经网络（RNN）

## 学习目标

通过本节学习，你将能够：
- 理解RNN的原理
- 掌握RNN的结构
- 使用PyTorch实现RNN
- 了解RNN的应用场景

---

## 2.1.1 为什么需要RNN？

**问题**：
- 传统神经网络假设输入是独立的
- 但序列数据（如文本、语音）有顺序关系

**解决方案**：循环神经网络（Recurrent Neural Network, RNN）
- 可以处理序列数据
- 有"记忆"能力

## 2.1.2 RNN的结构

**结构**：
- 输入：$x_1, x_2, ..., x_t$
- 隐藏状态：$h_t = tanh(W_h h_{t-1} + W_x x_t + b)$
- 输出：$y_t = W_y h_t + c$

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn

class RNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(RNN, self).__init__()
        self.hidden_size = hidden_size
        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, input_size)
        h0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.rnn(x, h0)
        out = self.fc(out[:, -1, :])  # 只取最后一个时间步的输出
        return out

# 使用示例
model = RNN(input_size=100, hidden_size=128, output_size=10)
x = torch.randn(32, 50, 100)  # (batch_size, sequence_length, input_size)
output = model(x)
print(output.shape)  # torch.Size([32, 10])
\`\`\`

## 2.1.3 RNN的训练：BPTT

**BPTT（Backpropagation Through Time）**：
- 将RNN展开为多个时间步
- 然后应用反向传播

**问题**：
- 梯度消失（Gradient Vanishing）
- 梯度爆炸（Gradient Exploding）

## 2.1.4 RNN的应用场景

**应用**：
1. **语言模型**：预测下一个词
2. **文本生成**：生成文本
3. **机器翻译**：seq2seq模型
4. **语音识别**：将语音转换为文本

---

## 实战练习

### 练习1：使用RNN进行文本分类

**任务**：
1. 使用RNN对IMDB电影评论进行情感分类
2. 对比RNN和全连接网络的性能

### 练习2：实现简单的语言模型

**任务**：
1. 使用RNN训练一个语言模型
2. 生成文本

---

## 本章小结

在本节中，我们学习了：
1. **RNN的原理**：处理序列数据
2. **RNN的结构**：隐藏状态、输出
3. **PyTorch实现**：使用nn.RNN
4. **应用场景**：语言模型、文本生成等

**关键要点**：
- RNN可以处理序列数据
- RNN有梯度消失和梯度爆炸问题
- 使用PyTorch可以轻松实现RNN

**下一节预告**：我们将学习长短期记忆网络（LSTM）。

---

**恭喜你完成了第2章第1节！** 🎉
        `
      },
      {
        id: 'l4-ch2-sec2',
        title: '2.2 长短期记忆网络（LSTM）',
        description: '理解LSTM的原理，掌握LSTM的结构',
        order: 2,
        duration: 1800,
        content: `
# 2.2 长短期记忆网络（LSTM）

## 学习目标

通过本节学习，你将能够：
- 理解LSTM的原理
- 掌握LSTM的结构
- 使用PyTorch实现LSTM
- 了解LSTM的应用场景

---

## 2.2.1 为什么需要LSTM？

**问题**：
- RNN有梯度消失问题
- 无法捕捉长期依赖关系

**解决方案**：长短期记忆网络（Long Short-Term Memory, LSTM）
- 引入门控机制
- 可以捕捉长期依赖关系

## 2.2.2 LSTM的结构

**结构**：
- 遗忘门（Forget Gate）：$f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$
- 输入门（Input Gate）：$i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$
- 候选值（Candidate Value）：$\tilde{C}_t = tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$
- 细胞状态（Cell State）：$C_t = f_t * C_{t-1} + i_t * \tilde{C}_t$
- 输出门（Output Gate）：$o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$
- 隐藏状态（Hidden State）：$h_t = o_t * tanh(C_t)$

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn

class LSTM(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(LSTM, self).__init__()
        self.hidden_size = hidden_size
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, input_size)
        h0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])  # 只取最后一个时间步的输出
        return out

# 使用示例
model = LSTM(input_size=100, hidden_size=128, output_size=10)
x = torch.randn(32, 50, 100)  # (batch_size, sequence_length, input_size)
output = model(x)
print(output.shape)  # torch.Size([32, 10])
\`\`\`

## 2.2.3 LSTM vs. RNN

**优势**：
- 可以捕捉长期依赖关系
- 缓解梯度消失问题

**劣势**：
- 计算量更大
- 参数更多

## 2.2.4 LSTM的应用场景

**应用**：
1. **语言模型**：预测下一个词
2. **机器翻译**：seq2seq模型
3. **语音识别**：将语音转换为文本
4. **时间序列预测**：预测股票价格、天气等

---

## 实战练习

### 练习1：使用LSTM进行文本分类

**任务**：
1. 使用LSTM对IMDB电影评论进行情感分类
2. 对比LSTM和RNN的性能

### 练习2：使用LSTM进行时间序列预测

**任务**：
1. 使用LSTM预测股票价格
2. 对比LSTM和ARIMA的性能

---

## 本章小结

在本节中，我们学习了：
1. **LSTM的原理**：引入门控机制
2. **LSTM的结构**：遗忘门、输入门、输出门
3. **PyTorch实现**：使用nn.LSTM
4. **应用场景**：语言模型、机器翻译等

**关键要点**：
- LSTM可以捕捉长期依赖关系
- LSTM比RNN计算量更大
- 使用PyTorch可以轻松实现LSTM

**下一节预告**：我们将学习注意力机制（Attention Mechanism）。

---

**恭喜你完成了第2章第2节！** 🎉
        `
      },
      {
        id: 'l4-ch2-sec3',
        title: '2.3 注意力机制（Attention Mechanism）',
        description: '理解注意力机制的原理，掌握Self-Attention',
        order: 3,
        duration: 1800,
        content: `
# 2.3 注意力机制（Attention Mechanism）

## 学习目标

通过本节学习，你将能够：
- 理解注意力机制的原理
- 掌握Self-Attention、Multi-Head Attention
- 使用PyTorch实现注意力机制
- 了解注意力机制的应用场景

---

## 2.3.1 为什么需要注意力机制？

**问题**：
- RNN/LSTM只能捕捉局部依赖关系
- 无法并行计算

**解决方案**：注意力机制（Attention Mechanism）
- 可以捕捉全局依赖关系
- 可以并行计算

## 2.3.2 注意力机制的原理

**基本公式**：

$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$

其中：
- $Q$（Query）：查询
- $K$（Key）：键
- $V$（Value）：值
- $d_k$：缩放因子

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

def attention(query, key, value):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / torch.sqrt(torch.tensor(d_k, dtype=torch.float))
    attention_weights = F.softmax(scores, dim=-1)
    output = torch.matmul(attention_weights, value)
    return output, attention_weights

# 使用示例
Q = torch.randn(1, 5, 64)  # (batch_size, sequence_length, d_model)
K = torch.randn(1, 5, 64)
V = torch.randn(1, 5, 64)

output, attention_weights = attention(Q, K, V)
print(output.shape)  # torch.Size([1, 5, 64])
print(attention_weights.shape)  # torch.Size([1, 5, 5])
\`\`\`

## 2.3.3 Self-Attention

**原理**：
- Q、K、V都来自同一个输入

**PyTorch实现**：

\`\`\`python
class SelfAttention(nn.Module):
    def __init__(self, d_model):
        super(SelfAttention, self).__init__()
        self.d_model = d_model
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, d_model)
        Q = self.W_q(x)
        K = self.W_k(x)
        V = self.W_v(x)
        
        d_k = self.d_model
        scores = torch.matmul(Q, K.transpose(-2, -1)) / torch.sqrt(torch.tensor(d_k, dtype=torch.float))
        attention_weights = F.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        return output, attention_weights

# 使用示例
model = SelfAttention(d_model=64)
x = torch.randn(1, 5, 64)
output, attention_weights = model(x)
print(output.shape)  # torch.Size([1, 5, 64])
\`\`\`

## 2.3.4 Multi-Head Attention

**原理**：
- 使用多个注意力头
- 每个头学习不同的表示

**PyTorch实现**：

\`\`\`python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        batch_size, sequence_length, d_model = x.size()
        
        # Linear projections
        Q = self.W_q(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        
        # Attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / torch.sqrt(torch.tensor(self.d_k, dtype=torch.float))
        attention_weights = F.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        
        # Concatenate heads
        output = output.transpose(1, 2).contiguous().view(batch_size, sequence_length, d_model)
        
        # Linear projection
        output = self.W_o(output)
        return output, attention_weights

# 使用示例
model = MultiHeadAttention(d_model=64, num_heads=8)
x = torch.randn(1, 5, 64)
output, attention_weights = model(x)
print(output.shape)  # torch.Size([1, 5, 64])
\`\`\`

## 2.3.5 注意力机制的应用场景

**应用**：
1. **机器翻译**：Seq2Seq with Attention
2. **文本摘要**：捕捉关键信息
3. **图像描述**：Attention-based Image Captioning
4. **Transformer**：完全基于注意力机制

---

## 实战练习

### 练习1：实现Self-Attention

**任务**：
1. 从零实现Self-Attention
2. 测试不同输入的效果

### 练习2：实现Multi-Head Attention

**任务**：
1. 从零实现Multi-Head Attention
2. 对比Single-Head和Multi-Head的效果

---

## 本章小结

在本节中，我们学习了：
1. **注意力机制的原理**：Q、K、V
2. **Self-Attention**：Q、K、V来自同一输入
3. **Multi-Head Attention**：多个注意力头
4. **应用场景**：机器翻译、文本摘要等

**关键要点**：
- 注意力机制可以捕捉全局依赖关系
- Multi-Head Attention可以学习不同的表示
- 注意力机制是Transformer的基础

**下一章预告**：我们将学习Transformer架构。

---

**恭喜你完成了第2章！** 🎉🎉🎉
        `
      }
    ]
  },
  
  // 第3章：Transformer架构
  {
    id: 'l4-ch3',
    title: '第3章：Transformer架构',
    description: '深入理解Transformer架构，掌握Encoder、Decoder、Position Encoding等',
    order: 3,
    sections: [
      {
        id: 'l4-ch3-sec1',
        title: '3.1 Transformer架构详解',
        description: '理解Transformer的整体架构，掌握Encoder和Decoder',
        order: 1,
        duration: 1800,
        content: `
# 3.1 Transformer架构详解

## 学习目标

通过本节学习，你将能够：
- 理解Transformer的整体架构
- 掌握Encoder和Decoder的结构
- 理解Position Encoding的作用
- 使用PyTorch实现Transformer

---

## 3.1.1 为什么需要Transformer？

**问题**：
- RNN/LSTM无法并行计算
- 难以捕捉长距离依赖关系

**解决方案**：Transformer
- 完全基于注意力机制
- 可以并行计算
- 可以捕捉长距离依赖关系

## 3.1.2 Transformer的整体架构

**结构**：
- **Encoder**：编码输入序列
- **Decoder**：解码输出序列

**流程图**：

\`\`\`
Input → Encoder (N层) → Encoder Output
                                      ↓
Target → Decoder (N层) → Output
\`\`\`

## 3.1.3 Encoder的结构

**每层包含**：
1. **Multi-Head Attention**
2. **Add & Norm**（残差连接 + Layer Normalization）
3. **Feed Forward Network**
4. **Add & Norm**

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class EncoderLayer(nn.Module):
    def __init__(self, d_model, num_heads, d_ff):
        super(EncoderLayer, self).__init__()
        self.self_attn = nn.MultiheadAttention(d_model, num_heads)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model)
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
    
    def forward(self, x):
        # Multi-Head Attention
        attn_output, _ = self.self_attn(x, x, x)
        x = self.norm1(x + attn_output)
        
        # Feed Forward Network
        ff_output = self.feed_forward(x)
        x = self.norm2(x + ff_output)
        
        return x

# 使用示例
encoder_layer = EncoderLayer(d_model=512, num_heads=8, d_ff=2048)
x = torch.randn(1, 10, 512)  # (batch_size, sequence_length, d_model)
output = encoder_layer(x)
print(output.shape)  # torch.Size([1, 10, 512])
\`\`\`

## 3.1.4 Decoder的结构

**每层包含**：
1. **Masked Multi-Head Attention**（防止看到未来信息）
2. **Add & Norm**
3. **Multi-Head Attention**（接受Encoder的输出）
4. **Add & Norm**
5. **Feed Forward Network**
6. **Add & Norm**

## 3.1.5 Position Encoding

**问题**：
- Transformer没有循环结构，无法捕捉序列的顺序信息

**解决方案**：Position Encoding
- 将位置信息编码到嵌入中

**公式**：

$PE_{(pos, 2i)} = sin(\frac{pos}{10000^{2i/d_{model}}})$

$PE_{(pos, 2i+1)} = cos(\frac{pos}{10000^{2i/d_{model}}})$

**PyTorch实现**：

\`\`\`python
class PositionEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionEncoding, self).__init__()
        
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2) * -(math.log(10000.0) / d_model))
        
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        x = x + self.pe[:, :x.size(1)]
        return x

# 使用示例
pos_encoding = PositionEncoding(d_model=512)
x = torch.randn(1, 10, 512)
output = pos_encoding(x)
print(output.shape)  # torch.Size([1, 10, 512])
\`\`\`

---

## 实战练习

### 练习1：实现Transformer Encoder

**任务**：
1. 从零实现Transformer Encoder
2. 测试Encoder的效果

### 练习2：实现Position Encoding

**任务**：
1. 从零实现Position Encoding
2. 可视化Position Encoding

---

## 本章小结

在本节中，我们学习了：
1. **Transformer的整体架构**：Encoder、Decoder
2. **Encoder的结构**：Multi-Head Attention、Feed Forward Network
3. **Decoder的结构**：Masked Multi-Head Attention
4. **Position Encoding**：捕捉序列的顺序信息

**关键要点**：
- Transformer完全基于注意力机制
- Transformer可以并行计算
- Position Encoding用于捕捉序列的顺序信息

**下一节预告**：我们将学习BERT和GPT。

---

**恭喜你完成了第3章第1节！** 🎉
        `
      },
      {
        id: 'l4-ch3-sec2',
        title: '3.2 BERT与GPT',
        description: '理解BERT和GPT的原理，掌握预训练语言模型',
        order: 2,
        duration: 1800,
        content: `
# 3.2 BERT与GPT

## 学习目标

通过本节学习，你将能够：
- 理解BERT的原理
- 理解GPT的原理
- 掌握预训练语言模型的训练方法
- 使用Hugging Face Transformers库

---

## 3.2.1 为什么需要预训练语言模型？

**问题**：
- 从零训练语言模型需要大量数据和计算资源
- 大多数开发者没有这样的资源

**解决方案**：预训练语言模型（Pre-trained Language Models）
- 在大规模语料上预训练
- 然后微调（Fine-tuning）到下游任务

## 3.2.2 BERT（Bidirectional Encoder Representations from Transformers）

**原理**：
- 基于Transformer Encoder
- 双向语言模型
- 预训练任务：
  1. **Masked Language Modeling (MLM)**：随机掩盖一些词，然后预测这些词
  2. **Next Sentence Prediction (NSP)**：预测两个句子是否连续

**使用Hugging Face Transformers**：

\`\`\`python
from transformers import BertTokenizer, BertModel

# 加载预训练的BERT模型和分词器
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# 编码文本
text = "Hello, world!"
encoding = tokenizer(text, return_tensors='pt')

# 获取BERT的输出
output = model(**encoding)
last_hidden_states = output.last_hidden_state
print(last_hidden_states.shape)  # torch.Size([1, 4, 768])
\`\`\`

## 3.2.3 GPT（Generative Pre-trained Transformer）

**原理**：
- 基于Transformer Decoder
- 单向语言模型（从左到右）
- 预训练任务：**Causal Language Modeling (CLM)**：预测下一个词

**使用Hugging Face Transformers**：

\`\`\`python
from transformers import GPT2Tokenizer, GPT2Model

# 加载预训练的GPT-2模型和分词器
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2Model.from_pretrained('gpt2')

# 编码文本
text = "Hello, world!"
encoding = tokenizer(text, return_tensors='pt')

# 获取GPT-2的输出
output = model(**encoding)
last_hidden_states = output.last_hidden_state
print(last_hidden_states.shape)  # torch.Size([1, 4, 768])
\`\`\`

## 3.2.4 BERT vs. GPT

| 特性 | BERT | GPT |
|------|------|-----|
| 架构 | Encoder | Decoder |
| 方向 | 双向 | 单向（从左到右） |
| 预训练任务 | MLM + NSP | CLM |
| 适用任务 | 文本分类、问答、NER | 文本生成 |

## 3.2.5 使用Hugging Face Transformers进行微调

**文本分类示例**（使用BERT）：

\`\`\`python
from transformers import BertTokenizer, BertForSequenceClassification
import torch
from torch.utils.data import Dataset, DataLoader
import torch.optim as optim

# 1. 定义数据集
class TextClassificationDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length=512):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_length = max_length
    
    def __len__(self):
        return len(self.texts)
    
    def __getitem__(self, idx):
        text = self.texts[idx]
        label = self.labels[idx]
        encoding = self.tokenizer(
            text,
            max_length=self.max_length,
            padding='max_length',
            truncation=True,
            return_tensors='pt'
        )
        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

# 2. 加载预训练的BERT模型和分词器
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

# 3. 准备数据
texts = ["I love this movie!", "This movie is terrible."]
labels = [1, 0]  # 1: positive, 0: negative
dataset = TextClassificationDataset(texts, labels, tokenizer)
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# 4. 定义优化器
optimizer = optim.Adam(model.parameters(), lr=2e-5)

# 5. 训练模型
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)

for epoch in range(3):
    model.train()
    for batch in dataloader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['labels'].to(device)
        
        optimizer.zero_grad()
        outputs = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels)
        loss = outputs.loss
        loss.backward()
        optimizer.step()
        
        print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')

# 6. 保存模型
model.save_pretrained('./my_bert_model')
tokenizer.save_pretrained('./my_bert_model')
\`\`\`

---

## 实战练习

### 练习1：使用BERT进行文本分类

**任务**：
1. 使用BERT在IMDB电影评论数据集上进行微调
2. 实现文本分类

### 练习2：使用GPT-2进行文本生成

**任务**：
1. 使用GPT-2生成文本
2. 调整生成参数（如temperature、top_k、top_p）

---

## 本章小结

在本节中，我们学习了：
1. **BERT的原理**：基于Encoder，双向语言模型
2. **GPT的原理**：基于Decoder，单向语言模型
3. **Hugging Face Transformers库**：轻松使用预训练模型
4. **微调方法**：在下游任务上微调预训练模型

**关键要点**：
- BERT适合文本分类、问答等任务
- GPT适合文本生成任务
- Hugging Face Transformers库提供了便捷的接口

**下一章预告**：我们将学习大语言模型应用。

---

**恭喜你完成了第3章！** 🎉🎉🎉
        `
      }
    ]
  },
  
  // 第4章：大语言模型应用
  {
    id: 'l4-ch4',
    title: '第4章：大语言模型应用',
    description: '学习大语言模型的实际应用，包括文本生成、问答系统、摘要生成等',
    order: 4,
    sections: [
      {
        id: 'l4-ch4-sec1',
        title: '4.1 文本生成（Text Generation）',
        description: '学习使用大语言模型进行文本生成',
        order: 1,
        duration: 1800,
        content: `
# 4.1 文本生成（Text Generation）

## 学习目标

通过本节学习，你将能够：
- 理解文本生成的原理
- 掌握不同的生成策略（Greedy Search、Beam Search、Sampling）
- 使用GPT-2/GPT-3进行文本生成
- 了解文本生成的应用场景

---

## 4.1.1 文本生成的任务

**任务**：
- 输入：一段文本（prompt）
- 输出：生成的文本

**挑战**：
- 如何生成连贯、有意义的文本？
- 如何控制生成文本的长度、风格等？

## 4.1.2 文本生成的策略

### 1. Greedy Search

**原理**：
- 每次选择概率最高的词

**问题**：
- 可能陷入重复循环
- 不是全局最优

### 2. Beam Search

**原理**：
- 维护top-k个候选序列

**代码示例**（使用Hugging Face Transformers）：

\`\`\`python
from transformers import GPT2Tokenizer, GPT2LMHeadModel

# 加载模型和分词器
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

# 编码输入
input_text = "Once upon a time"
input_ids = tokenizer.encode(input_text, return_tensors='pt')

# 生成文本（使用Beam Search）
output_ids = model.generate(
    input_ids,
    max_length=50,
    num_beams=5,
    early_stopping=True
)

# 解码输出
output_text = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(output_text)
\`\`\`

### 3. Sampling

**原理**：
- 根据概率分布随机采样

**改进**：
- **Top-k Sampling**：只从概率最高的k个词中采样
- **Top-p (Nucleus) Sampling**：只从累积概率超过p的词中采样
- **Temperature**：控制采样的随机性

**代码示例**：

\`\`\`python
# 生成文本（使用Top-p Sampling）
output_ids = model.generate(
    input_ids,
    max_length=50,
    do_sample=True,
    top_p=0.95,
    temperature=0.7
)

output_text = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(output_text)
\`\`\`

## 4.1.3 使用GPT-2/GPT-3进行文本生成

**Hugging Face Transformers**（GPT-2）：

\`\`\`python
from transformers import pipeline

# 使用pipeline进行文本生成
generator = pipeline('text-generation', model='gpt2')

# 生成文本
output = generator(
    "Once upon a time",
    max_length=50,
    num_return_sequences=3,
    do_sample=True,
    top_p=0.95,
    temperature=0.7
)

for i, seq in enumerate(output):
    print(f'{i+1}. {seq["generated_text"]}')
\`\`\`

**OpenAI API**（GPT-3）：

\`\`\`python
import openai

openai.api_key = 'your-api-key'

response = openai.Completion.create(
    engine='text-davinci-003',
    prompt='Once upon a time',
    max_tokens=50,
    temperature=0.7,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
)

print(response.choices[0].text.strip())
\`\`\`

## 4.1.4 文本生成的应用场景

**应用**：
1. **故事生成**：生成故事、小说
2. **对话系统**：生成对话回复
3. **代码生成**：生成代码（如GitHub Copilot）
4. **诗歌生成**：生成诗歌

---

## 实战练习

### 练习1：使用GPT-2生成故事

**任务**：
1. 使用GPT-2生成一个短篇故事
2. 尝试不同的生成策略（Greedy Search、Beam Search、Sampling）

### 练习2：使用GPT-3 API进行文本生成

**任务**：
1. 申请OpenAI API密钥
2. 使用GPT-3 API进行文本生成
3. 调整生成参数，观察效果

---

## 本章小结

在本节中，我们学习了：
1. **文本生成的任务**：根据prompt生成文本
2. **生成策略**：Greedy Search、Beam Search、Sampling
3. **使用GPT-2/GPT-3**：Hugging Face Transformers和OpenAI API
4. **应用场景**：故事生成、对话系统、代码生成

**关键要点**：
- Beam Search可以生成更准确的文本
- Sampling可以生成更多样化的文本
- 调整生成参数可以控制生成文本的质量

**下一节预告**：我们将学习问答系统。

---

**恭喜你完成了第4章第1节！** 🎉
        `
      },
      {
        id: 'l4-ch4-sec2',
        title: '4.2 问答系统（Question Answering）',
        description: '学习使用大语言模型构建问答系统',
        order: 2,
        duration: 1800,
        content: `
# 4.2 问答系统（Question Answering）

## 学习目标

通过本节学习，你将能够：
- 理解问答系统的任务
- 掌握Extractive QA和Generative QA
- 使用BERT构建问答系统
- 了解问答系统的应用场景

---

## 4.2.1 问答系统的任务

**任务**：
- 输入：问题 + 上下文（Context）
- 输出：答案

**类型**：
1. **Extractive QA**：答案直接从上下文中提取
2. **Generative QA**：答案由模型生成

## 4.2.2 使用BERT构建问答系统

**SQuAD数据集**：
- Stanford Question Answering Dataset
- 包含问题、上下文、答案

**使用Hugging Face Transformers**：

\`\`\`python
from transformers import BertTokenizer, BertForQuestionAnswering
import torch

# 加载预训练的BERT问答模型和分词器
tokenizer = BertTokenizer.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')
model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

# 准备输入
question = "What is the capital of France?"
context = "France is a country in Europe. The capital of France is Paris."

# 编码输入
encoding = tokenizer.encode_plus(
    question,
    context,
    max_length=512,
    truncation=True,
    padding='max_length',
    return_tensors='pt'
)

# 获取答案的起始和结束位置
input_ids = encoding['input_ids']
attention_mask = encoding['attention_mask']

with torch.no_grad():
    outputs = model(input_ids=input_ids, attention_mask=attention_mask)
    start_scores = outputs.start_logits
    end_scores = outputs.end_logits

# 找到最可能的起始和结束位置
start_index = torch.argmax(start_scores)
end_index = torch.argmax(end_scores)

# 解码答案
answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(input_ids[0][start_index:end_index+1]))
print(answer)  # Paris
\`\`\`

## 4.2.3 使用GPT-3构建问答系统

**OpenAI API**：

\`\`\`python
import openai

openai.api_key = 'your-api-key'

response = openai.Completion.create(
    engine='text-davinci-003',
    prompt='Context: France is a country in Europe. The capital of France is Paris.\n\nQuestion: What is the capital of France?\n\nAnswer:',
    max_tokens=50,
    temperature=0.0
)

print(response.choices[0].text.strip())  # Paris
\`\`\`

## 4.2.4 问答系统的应用场景

**应用**：
1. **客户支持**：自动回答客户问题
2. **智能助手**：Siri、Alexa、Google Assistant
3. **知识库问答**：企业内部知识库
4. **教育**：自动回答学生问题

---

## 实战练习

### 练习1：使用BERT构建问答系统

**任务**：
1. 在SQuAD数据集上微调BERT
2. 评估模型性能

### 练习2：使用GPT-3 API构建问答系统

**任务**：
1. 使用GPT-3 API构建问答系统
2. 对比BERT和GPT-3的性能

---

## 本章小结

在本节中，我们学习了：
1. **问答系统的任务**：输入问题+上下文，输出答案
2. **Extractive QA和Generative QA**
3. **使用BERT构建问答系统**：Hugging Face Transformers
4. **应用场景**：客户支持、智能助手等

**关键要点**：
- BERT适合Extractive QA
- GPT-3适合Generative QA
- 问答系统有很多实际应用

**下一节预告**：我们将学习文本摘要。

---

**恭喜你完成了第4章第2节！** 🎉
        `
      },
      {
        id: 'l4-ch4-sec3',
        title: '4.3 文本摘要（Text Summarization）',
        description: '学习使用大语言模型进行文本摘要',
        order: 3,
        duration: 1800,
        content: `
# 4.3 文本摘要（Text Summarization）

## 学习目标

通过本节学习，你将能够：
- 理解文本摘要的任务
- 掌握Extractive Summarization和Abstractive Summarization
- 使用BART/T5进行文本摘要
- 了解文本摘要的应用场景

---

## 4.3.1 文本摘要的任务

**任务**：
- 输入：长文本
- 输出：摘要

**类型**：
1. **Extractive Summarization**：从原文中提取关键句子
2. **Abstractive Summarization**：生成新的句子（更接近人类摘要）

## 4.3.2 使用BART进行文本摘要

**BART**：
- 基于Transformer的Seq2Seq模型
- 适合Abstractive Summarization

**使用Hugging Face Transformers**：

\`\`\`python
from transformers import BartTokenizer, BartForConditionalGeneration

# 加载预训练的BART模型和分词器
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')
model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')

# 准备输入
text = """
The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, 
and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. 
During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest 
man-made structure in the world, a title it held for 41 years until the Chrysler Building in 
New York City was finished in 1930. It was the first structure to reach a height of 300 metres.
"""

# 编码输入
encoding = tokenizer(text, return_tensors='pt', max_length=1024, truncation=True)

# 生成摘要
output_ids = model.generate(
    encoding['input_ids'],
    max_length=150,
    min_length=50,
    do_sample=False
)

# 解码输出
summary = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(summary)
\`\`\`

## 4.3.3 使用T5进行文本摘要

**T5**（Text-to-Text Transfer Transformer）：
- 将所有NLP任务统一为文本到文本的格式
- 适合多种任务，包括文本摘要

**使用Hugging Face Transformers**：

\`\`\`python
from transformers import T5Tokenizer, T5ForConditionalGeneration

# 加载预训练的T5模型和分词器
tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5ForConditionalGeneration.from_pretrained('t5-small')

# 准备输入
text = "summarize: " + """
The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, 
and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.
"""

# 编码输入
encoding = tokenizer(text, return_tensors='pt', max_length=512, truncation=True)

# 生成摘要
output_ids = model.generate(
    encoding['input_ids'],
    max_length=150,
    min_length=50,
    do_sample=False
)

# 解码输出
summary = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(summary)
\`\`\`

## 4.3.4 文本摘要的应用场景

**应用**：
1. **新闻摘要**：自动生成新闻摘要
2. **论文摘要**：自动生成论文摘要
3. **会议记录摘要**：自动生成会议纪要
4. **邮件摘要**：自动生成邮件摘要

---

## 实战练习

### 练习1：使用BART进行文本摘要

**任务**：
1. 使用BART对长文本进行摘要
2. 调整生成参数，观察效果

### 练习2：使用T5进行文本摘要

**任务**：
1. 使用T5对长文本进行摘要
2. 对比BART和T5的性能

---

## 本章小结

在本节中，我们学习了：
1. **文本摘要的任务**：输入长文本，输出摘要
2. **Extractive和Abstractive Summarization**
3. **使用BART/T5进行文本摘要**：Hugging Face Transformers
4. **应用场景**：新闻摘要、论文摘要等

**关键要点**：
- BART适合Abstractive Summarization
- T5适合多种NLP任务
- 文本摘要有很多实际应用

**课程总结预告**：我们将进行课程总结和大作业。

---

**恭喜你完成了第4章！** 🎉🎉🎉
        `
      }
    ]
  }
];

export async function seedL4Courses() {
  console.log('Seeding L4 courses...');
  
  // 插入课程
  await db.insert(courses).values(l4Course).onConflictDoNothing();
  
  // 插入章节
  for (const chapter of l4Chapters) {
    await db.insert(chapters).values({
      id: chapter.id,
      courseId: l4Course.id,
      title: chapter.title,
      description: chapter.description,
      order: chapter.order,
    }).onConflictDoNothing();
    
    // 插入小节
    for (const section of chapter.sections) {
      await db.insert(sections).values({
        id: section.id,
        chapterId: chapter.id,
        title: section.title,
        description: section.description,
        order: section.order,
        duration: section.duration,
        content: section.content,
      }).onConflictDoNothing();
    }
  }
  
  console.log('L4 courses seeded successfully!');
}
