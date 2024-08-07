<template name="skeleton">
  <view class="sk-container">
    <view class="index index">
      <view class="top top">
        <view
          class="u-subsection subsection--u-subsection data-v-7b2e14a2 subsection--data-v-7b2e14a2 u-subsection--button subsection--u-subsection--button"
          style="background-color: #eeeeef"
        >
          <view
            class="u-subsection__bar subsection--u-subsection__bar cursor-pointer subsection--cursor-pointer data-v-7b2e14a2 subsection--data-v-7b2e14a2 u-subsection--button__bar subsection--u-subsection--button__bar"
            style="width: 114px; height: 28px; transform: translateX(0px)"
          ></view>
          <view
            class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-7b2e14a2 subsection--data-v-7b2e14a2 u-subsection__item--0 subsection--u-subsection__item--0 u-subsection__item--no-border-right subsection--u-subsection__item--no-border-right u-subsection__item--first subsection--u-subsection__item--first"
            style="true"
          >
            <text
              class="u-subsection__item__text subsection--u-subsection__item__text data-v-7b2e14a2 subsection--data-v-7b2e14a2 sk-transparent sk-opacity"
              style="font-weight: bold; font-size: 12px; color: #3c9cff"
              >日</text
            >
          </view>
          <view
            class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-7b2e14a2 subsection--data-v-7b2e14a2 u-subsection__item--1 subsection--u-subsection__item--1 u-subsection__item--no-border-right subsection--u-subsection__item--no-border-right"
            style="true"
          >
            <text
              class="u-subsection__item__text subsection--u-subsection__item__text data-v-7b2e14a2 subsection--data-v-7b2e14a2 sk-transparent sk-opacity"
              style="font-weight: normal; font-size: 12px; color: #303133"
              >周</text
            >
          </view>
          <view
            class="u-subsection__item subsection--u-subsection__item cursor-pointer subsection--cursor-pointer data-v-7b2e14a2 subsection--data-v-7b2e14a2 u-subsection__item--2 subsection--u-subsection__item--2 u-subsection__item--last subsection--u-subsection__item--last"
            style="true"
          >
            <text
              class="u-subsection__item__text subsection--u-subsection__item__text data-v-7b2e14a2 subsection--data-v-7b2e14a2 sk-transparent sk-opacity"
              style="font-weight: normal; font-size: 12px; color: #303133"
              >月</text
            >
          </view>
        </view>
      </view>
      <view class="date_title sk-transparent">
        <view
          class="u-icon icon--u-icon data-v-1c933a9a icon--data-v-1c933a9a u-icon--right icon--u-icon--right"
        >
          <text
            class="u-icon__icon icon--u-icon__icon data-v-1c933a9a icon--data-v-1c933a9a uicon-arrow-left icon--uicon-arrow-left u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-534 sk-text"
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
        08月07日
        <view
          class="u-icon icon--u-icon data-v-1c933a9a icon--data-v-1c933a9a u-icon--right icon--u-icon--right"
        >
          <text
            class="u-icon__icon icon--u-icon__icon data-v-1c933a9a icon--data-v-1c933a9a uicon-arrow-right icon--uicon-arrow-right u-iconfont icon--u-iconfont sk-transparent sk-text-0-0000-634 sk-text"
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
          <view class="sk-transparent sk-text-14-2857-12 sk-text">心率范围(次/分)</view>
          <view class="rate sk-transparent sk-text-14-2857-622 sk-text">0-0</view>
        </view>
        <view class="row_block row_block">
          <view class="sk-transparent sk-text-14-2857-141 sk-text">平均心率(次/分)</view>
          <view class="rate sk-transparent sk-text-14-2857-138 sk-text">0.00</view>
        </view>
        <view class="row_block row_block">
          <view class="sk-transparent sk-text-14-2857-433 sk-text">最高心率(次/分)</view>
          <view class="rate sk-transparent sk-text-14-2857-983 sk-text">0</view>
        </view>
      </view>
      <view style="margin-top: 11px">
        <view
          style="font-size: 11px; color: gray; margin-left: 16px"
          class="sk-transparent sk-text-14-2857-233 sk-text"
          >心率历程(次/分)</view
        >
        <view is="pages/index/components/LineCharts">
          <view class="data-v-86ac4483 LineCharts--data-v-86ac4483">
            <view class="data-v-86ac4483 LineCharts--data-v-86ac4483">
              <view
                is="components/emptyBox/index"
                class="data-v-86ac4483 LineCharts--data-v-86ac4483"
              >
                <view>
                  <view
                    class="u-empty empty--u-empty data-v-bd84101d empty--data-v-bd84101d"
                    style="margin-top: 30px"
                  >
                    <image
                      class="data-v-bd84101d empty--data-v-bd84101d sk-image"
                      mode="widthFix"
                      style="width: 160px; height: 160px"
                    ></image>
                    <text
                      class="u-empty__text empty--u-empty__text data-v-bd84101d empty--data-v-bd84101d sk-transparent sk-text-14-2857-146 sk-text"
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
          class="sk-transparent sk-text-14-2857-126 sk-text"
          >心率分布</view
        >
        <view>
          <view is="pages/index/components/heartMap">
            <view class="data-v-ce465ef7 heartMap--data-v-ce465ef7">
              <view class="data-v-ce465ef7 heartMap--data-v-ce465ef7">
                <view
                  is="components/emptyBox/index"
                  class="data-v-ce465ef7 heartMap--data-v-ce465ef7"
                >
                  <view>
                    <view
                      class="u-empty empty--u-empty data-v-bd84101d empty--data-v-bd84101d"
                      style="margin-top: 30px"
                    >
                      <image
                        class="data-v-bd84101d empty--data-v-bd84101d sk-image"
                        mode="widthFix"
                        style="width: 160px; height: 160px"
                      ></image>
                      <text
                        class="u-empty__text empty--u-empty__text data-v-bd84101d empty--data-v-bd84101d sk-transparent sk-text-14-2857-647 sk-text"
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
    </view>
  </view>
</template>

<style scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-534 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 50.7246rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-634 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 50.7246rpx;
  position: relative !important;
}
.sk-text-14-2857-12 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-622 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 55.7971rpx;
  position: relative !important;
}
.sk-text-14-2857-141 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-138 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 55.7971rpx;
  position: relative !important;
}
.sk-text-14-2857-433 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-983 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 55.7971rpx;
  position: relative !important;
}
.sk-text-14-2857-233 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.8986rpx;
  position: relative !important;
}
.sk-text-14-2857-146 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-126 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 40.5797rpx;
  position: relative !important;
}
.sk-text-14-2857-647 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
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
