import { useRef } from "react";
import LJSLogo from "./ljs.jpeg";
import StockImg from "./stock.jpg";
import PlayImg from "./play.png";
import audio from "./demo.mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <h5 className="title">一条小道消息......耍猴百亿资金</h5>
        <div className="follow-container">
          <div className="avatar">
            <img src={LJSLogo}></img>
          </div>
          <div className="label-container">
            <div className="top">陆金所</div>
            <div className="bottom">您身边专业的财富管理专家</div>
          </div>
          <div className="follow">
            <div>+关注</div>
          </div>
        </div>
      </header>
      <main>
        <div className="article-content">
          <div className="audio-container">
            <div
              className="player-container"
              onClick={() => {
                audioRef.current.play();
              }}
            >
              <img className="playIcon" src={PlayImg} />
            </div>
            <div className="player-detail">智能语音版</div>
            <div className="player-time">约3分钟</div>

            <audio ref={audioRef} style={{ display: "none" }}>
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
          <article>
            今天盘前媒体报道，苹果将欧菲光踢出供应链名单，据悉，此前苹果IPAD低价版由欧菲光、GIS、TPK三家一起供应触控模组，三家的供货比重差不多。
          </article>
          <article>
            我在网上搜了一下，这个消息我能查到的最早来源是财联社，时间是8:49，而财联社显示它的消息来源是香港经济日报。我对港媒不熟悉，不清楚香港经济日报是什么江湖地位，但这条消息还是引发了剧烈反应。
          </article>
          <img src={StockImg} />
          <article>
            开盘直接就把500亿市值的欧菲光给干跌停了，20多亿的筹码封死，纹丝不动。欧菲光是市场有名的果链概念股，如果它被苹果爸爸抛弃了，一个跌停是顶不住的。
          </article>
          <article>
            这里面还有一个背景要补充，7月份中旬的时候南昌欧菲光被美国政府列入“实体清单”，也就是美帝的黑名单，当时欧菲光的股价就连续大跌过一波，所以本来就是惊弓鸟，这次听个弦，裤裆就开始滴滴答答。
          </article>
          <article>
            时间到了11:06，财联社又发布了一条“独家电报”，称欧菲光被断掉的业务，已经被另一个果链公司蓝思科技给替代了。这个消息来源是财联社自己的记者李拥军。
          </article>
          <article>
            然后蓝思科技股价直接火箭发射，由于创业板的涨跌停改成了20%，中午收盘前一度涨到了11%。
          </article>
          <article>
            吃饭休息的这90分钟也不消停，欧菲光紧急辟谣，称自己没被苹果抛弃，美国大客户的订单依然在，到这里剧情发生了180度逆转。
          </article>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
