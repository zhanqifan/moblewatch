<template name="skeleton">
  <view class="sk-container">
    <view>
      <view class="index index">
        <view class="top top">
          <view
            class="u-subsection subsection--u-subsection data-v-a956e701 subsection--data-v-a956e701 u-subsection--button subsection--u-subsection--button"
            style="background-color: #eeeeef"
          >
            <view
              class="u-subsection__bar subsection--u-subsection__bar cursor-pointer subsection--cursor-pointer data-v-a956e701 subsection--data-v-a956e701 u-subsection--button__bar subsection--u-subsection--button__bar"
              style="width: 118.671875px; height: 28px; transform: translateX(0px)"
            ></view>
            <view
              class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-a956e701 subsection--data-v-a956e701 u-subsection__item--0 subsection--u-subsection__item--0 u-subsection__item--no-border-right subsection--u-subsection__item--no-border-right u-subsection__item--first subsection--u-subsection__item--first"
              style="true"
            >
              <text
                class="u-subsection__item__text subsection--u-subsection__item__text data-v-a956e701 subsection--data-v-a956e701 sk-transparent sk-opacity"
                style="font-weight: bold; font-size: 12px; color: #1f2328"
                >日</text
              >
            </view>
            <view
              class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-a956e701 subsection--data-v-a956e701 u-subsection__item--1 subsection--u-subsection__item--1 u-subsection__item--no-border-right subsection--u-subsection__item--no-border-right"
              style="true"
            >
              <text
                class="u-subsection__item__text subsection--u-subsection__item__text data-v-a956e701 subsection--data-v-a956e701 sk-transparent sk-opacity"
                style="font-weight: normal; font-size: 12px; color: #303133"
                >周</text
              >
            </view>
            <view
              class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-a956e701 subsection--data-v-a956e701 u-subsection__item--2 subsection--u-subsection__item--2 u-subsection__item--last subsection--u-subsection__item--last"
              style="true"
            >
              <text
                class="u-subsection__item__text subsection--u-subsection__item__text data-v-a956e701 subsection--data-v-a956e701 sk-transparent sk-opacity"
                style="font-weight: normal; font-size: 12px; color: #303133"
                >月</text
              >
            </view>
          </view>
        </view>
        <view class="date_title sk-transparent">
          <view
            class="u-icon icon--u-icon data-v-b9c4af5d icon--data-v-b9c4af5d u-icon--right icon--u-icon--right"
          >
            <text
              class="u-icon__icon icon--u-icon__icon data-v-b9c4af5d icon--data-v-b9c4af5d uicon-arrow-left icon--uicon-arrow-left u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-177 sk-text"
              style="
                font-size: 28px;
                line-height: 28px;
                font-weight: normal;
                top: 0px;
                color: rgb(144, 147, 153);
                background-position-x: 50%;
              "
              ></text
            >
          </view>
          08月09日
          <view
            class="u-icon icon--u-icon data-v-b9c4af5d icon--data-v-b9c4af5d u-icon--right icon--u-icon--right"
          >
            <text
              class="u-icon__icon icon--u-icon__icon data-v-b9c4af5d icon--data-v-b9c4af5d uicon-arrow-right icon--uicon-arrow-right u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-744 sk-text"
              style="
                font-size: 28px;
                line-height: 28px;
                font-weight: normal;
                top: 0px;
                color: rgb(144, 147, 153);
                background-position-x: 50%;
              "
              ></text
            >
          </view>
        </view>
        <view class="heart_row heart_row">
          <view class="row_block row_block">
            <view class="sk-transparent sk-text-14-2857-576 sk-text">心率范围(次/分)</view>
            <view class="rate sk-transparent sk-text-14-2857-264 sk-text">0-0</view>
          </view>
          <view class="row_block row_block">
            <view class="sk-transparent sk-text-14-2857-572 sk-text">平均心率(次/分)</view>
            <view class="rate sk-transparent sk-text-14-2857-618 sk-text">0.00</view>
          </view>
          <view class="row_block row_block">
            <view class="sk-transparent sk-text-14-2857-340 sk-text">最高心率(次/分)</view>
            <view class="rate sk-transparent sk-text-14-2857-372 sk-text">0</view>
          </view>
        </view>
        <view style="margin-top: 11px">
          <view
            style="font-size: 11px; color: gray; margin-left: 17px"
            class="sk-transparent sk-text-14-2857-742 sk-text"
            >心率历程(次/分)</view
          >
          <view is="pages/index/components/LineCharts">
            <view class="data-v-7171fd60 LineCharts--data-v-7171fd60">
              <view class="data-v-7171fd60 LineCharts--data-v-7171fd60">
                <view
                  is="components/emptyBox/index"
                  class="data-v-7171fd60 LineCharts--data-v-7171fd60"
                >
                  <view>
                    <view
                      class="u-empty empty--u-empty data-v-6ea1a180 empty--data-v-6ea1a180"
                      style="margin-top: 30px"
                    >
                      <image
                        class="data-v-6ea1a180 empty--data-v-6ea1a180 sk-image"
                        mode="widthFix"
                        style="width: 160px; height: 160px"
                      ></image>
                      <text
                        class="u-empty__text empty--u-empty__text data-v-6ea1a180 empty--data-v-6ea1a180 sk-transparent sk-text-14-2857-118 sk-text"
                        style="color: #c0c4cc; font-size: 14px"
                        >暂无内容</text
                      >
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view>
          <view
            style="font-weight: 500; color: #c4c1c1"
            class="sk-transparent sk-text-14-2857-455 sk-text"
            >心率分布</view
          >
          <view>
            <view is="pages/index/components/heartMap">
              <view class="data-v-c289cf69 heartMap--data-v-c289cf69">
                <view class="data-v-c289cf69 heartMap--data-v-c289cf69">
                  <view
                    is="components/emptyBox/index"
                    class="data-v-c289cf69 heartMap--data-v-c289cf69"
                  >
                    <view>
                      <view
                        class="u-empty empty--u-empty data-v-6ea1a180 empty--data-v-6ea1a180"
                        style="margin-top: 30px"
                      >
                        <image
                          class="data-v-6ea1a180 empty--data-v-6ea1a180 sk-image"
                          mode="widthFix"
                          style="width: 160px; height: 160px"
                        ></image>
                        <text
                          class="u-empty__text empty--u-empty__text data-v-6ea1a180 empty--data-v-6ea1a180 sk-transparent sk-text-14-2857-468 sk-text"
                          style="color: #c0c4cc; font-size: 14px"
                          >暂无内容</text
                        >
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view is="components/tabBar/index">
          <view class="u-tabbar tabbar--u-tabbar data-v-f6651a04 tabbar--data-v-f6651a04">
            <view
              class="u-tabbar__content tabbar--u-tabbar__content data-v-f6651a04 tabbar--data-v-f6651a04 u-border-top tabbar--u-border-top u-tabbar--fixed tabbar--u-tabbar--fixed"
              style="z-index: 1"
            >
              <view
                class="u-tabbar__content__item-wrapper tabbar--u-tabbar__content__item-wrapper data-v-f6651a04 tabbar--data-v-f6651a04"
              >
                <view
                  class="u-tabbar-item item--u-tabbar-item data-v-9c9ff868 item--data-v-9c9ff868"
                  style="true"
                >
                  <view
                    class="u-tabbar-item__icon item--u-tabbar-item__icon data-v-9c9ff868 item--data-v-9c9ff868"
                  >
                    <view
                      class="u-icon icon--u-icon data-v-b9c4af5d icon--data-v-b9c4af5d u-icon--right icon--u-icon--right"
                    >
                      <text
                        class="u-icon__icon icon--u-icon__icon data-v-b9c4af5d icon--data-v-b9c4af5d uicon-home icon--uicon-home u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-668 sk-text"
                        style="
                          font-size: 20px;
                          line-height: 20px;
                          font-weight: normal;
                          top: 0px;
                          color: #1989fa;
                        "
                        ></text
                      >
                    </view>
                  </view>
                  <text
                    class="u-tabbar-item__text item--u-tabbar-item__text data-v-9c9ff868 item--data-v-9c9ff868 sk-transparent sk-text-14-2857-658 sk-text"
                    style="color: #1989fa"
                    >首页</text
                  >
                </view>
                <view
                  class="u-tabbar-item item--u-tabbar-item data-v-9c9ff868 item--data-v-9c9ff868"
                  style="true"
                >
                  <view
                    class="u-tabbar-item__icon item--u-tabbar-item__icon data-v-9c9ff868 item--data-v-9c9ff868"
                  >
                    <view
                      class="u-icon icon--u-icon data-v-b9c4af5d icon--data-v-b9c4af5d u-icon--right icon--u-icon--right"
                    >
                      <text
                        class="u-icon__icon icon--u-icon__icon data-v-b9c4af5d icon--data-v-b9c4af5d uicon-account icon--uicon-account u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-23 sk-text"
                        style="
                          font-size: 20px;
                          line-height: 20px;
                          font-weight: normal;
                          top: 0px;
                          color: #7d7e80;
                        "
                        ></text
                      >
                    </view>
                  </view>
                  <text
                    class="u-tabbar-item__text item--u-tabbar-item__text data-v-9c9ff868 item--data-v-9c9ff868 sk-transparent sk-text-14-2857-811 sk-text"
                    style="color: #7d7e80"
                    >我的</text
                  >
                </view>
              </view>
            </view>
            <view
              class="u-tabbar__placeholder tabbar--u-tabbar__placeholder data-v-f6651a04 tabbar--data-v-f6651a04"
              style="height: 50px"
            ></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-177 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 48.8372rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-744 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 48.8372rpx;
  position: relative !important;
}
.sk-text-14-2857-576 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-264 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.7209rpx;
  position: relative !important;
}
.sk-text-14-2857-572 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-618 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.7209rpx;
  position: relative !important;
}
.sk-text-14-2857-340 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-372 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.7209rpx;
  position: relative !important;
}
.sk-text-14-2857-742 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.8605rpx;
  position: relative !important;
}
.sk-text-14-2857-118 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-14-2857-455 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}
.sk-text-14-2857-468 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-0-0000-668 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-14-2857-658 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}
.sk-text-0-0000-23 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.8837rpx;
  position: relative !important;
}
.sk-text-14-2857-811 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
