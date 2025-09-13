import { css } from "lit";

export function amapCardStyle() {
  return css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 120px;
      min-height: 120px;
    }

    .amap-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    #amap {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      min-height: 120px;
    }

    .amap-custom {
      top: 0;
      left: 0;
      position: absolute;
    }

    #amap img {
      max-width: none !important;
      max-height: none !important;
    }

    #amap {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KD0UqkwAAAf1JREFUeAHtmtGpAkEQBE9TMAi/zMb8MzCGU/97Ye8QunDrfQ7qNFUMS8Pbtom/fd8fEx/b/FymdIDL85p/wmmLgEJa5Ad7FTIA0xorpEV+sFchAzCtsUJa5Ad7FTIA0xorpEV+sPcyW1oG33f8WwL3qZ+blebnMs4DXGzqGWFv6hvSYx83KyRi6Q0V0mMfNyskYukNFdJjHzcrJGLpDRXSYx8329QjltrQpp7QH2jWv/5fA5t6EtKc+YY06YfdCglQmiOFNOmH3QoJUJojhTTph90KCVCaI4U06YfdNvUApTiyqSf4NvVEZdGZbwhMvEIUAiMAi+OFKARGABbHC1EIjAAsjk2dJcSmnnzY1BOVRWc+6jDxClEIjAAsjheiEBgBWBwvRCEwArA4/9LUbx+uLxjbM3Fs6omaTT1RWXTmow4TrxCFwAjA4nghCoERgMXxQhQCIwCL8y9NHYb1dBybekJnU09UFp35qMPEK0QhMAKwOF6IQmAEYHG8EIXACMDi2NRZQmzqyYdNPVFZdOajDhOvEIXACMDieCEKgRGAxfFCFAIjAItjU2cJsaknHzb1RGXRmY86TLxCFAIjAIvjhSgERgAWxwtRCIwALI5NnSXEpp582NQTlUVnPuow8QpRCIwALI4XohAYAVgcL0QhMAKwON+m/oRlWjrOG2SeYNIaKe7fAAAAAElFTkSuQmCC);
      //background-color: #f1f1f1;
      touch-action: none;
      position: relative;
      overflow: hidden;
      -ms-touch-action: none;
    }

    .amap-drags,
    .amap-layers {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      transform: translateZ(0);
    }

    .amap-layers canvas {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .amap-layers .amap-layer-tile {
      transform: translateZ(0);
    }

    .amap-layers .amap-layer-tile,
    .amap-layers .amap-layer-tile img {
      position: absolute;
      top: 0;
      left: 0;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-layers .amap-layer-image {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(0);
    }

    .amap-layers .amap-layer-image img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .amap-layer img {
      pointer-events: none;
      display: block;
    }

    .amap-layers .amap-layer-overlay {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(0);
    }

    .amap-e,
    .amap-maps {
      width: 100%;
      height: 100%;
      outline: none;
    }

    .amap-maps {
      z-index: 0;
    }

    .amap-e,
    .amap-layers,
    .amap-maps,
    .amap-tile-container {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
    }

    .amap-context,
    .amap-marker,
    .amap-markers,
    .amap-overlays {
      position: absolute;
      left: 0;
      top: 0;
    }

    .amap-layers {
      z-index: 0;
    }

    .amap-overlays {
      z-index: 110;
      cursor: default;
    }

    .amap-markers {
      z-index: 120;
    }

    .amap-controls {
      z-index: 150;
    }

    .amap-copyright {
      display: block !important;
      left: 85px;
      height: 16px;
      bottom: 1.8px;
      line-height: 1.5;
      padding-bottom: 2px;
      font-size: 11px;
      font-family: Arial, sans-serif;
    }

    .amap-copyright,
    .amap-logo {
      position: absolute;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-logo {
      bottom: 1.5px;
      left: 4px;
      height: 20px;
    }

    .amap-logo img {
      width: 73px !important;
      height: 20px !important;
      border: none;
      vertical-align: baseline !important;
      user-select: none;
      -webkit-user-select: none;
    }

    .amap-icon {
      position: relative;
      z-index: 1;
    }

    .amap-icon img {
      position: absolute;
      z-index: -1;
    }

    .amap-marker-label {
      position: absolute;
      z-index: 2;
      border: 1px solid #00f;
      background-color: #fff;
      white-space: nowrap;
      cursor: default;
      padding: 3px;
      font-size: 12px;
      line-height: 14px;
    }

    .amap-info {
      left: 0;
      width: fit-content;
      width: -webkit-fit-content;
      width: -moz-max-content;
    }

    .amap-info,
    .amap-menu {
      position: absolute;
      z-index: 140;
    }

    .amap-info-close {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #c3c3c3;
      text-decoration: none;
      font:
        700 16px/14px Tahoma,
        Verdana,
        sans-serif;
      width: 14px;
      height: 14px;
      cursor: pointer;
    }

    .amap-info-outer,
    .amap-menu-outer {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      background: none repeat scroll 0 0 #fff;
      border-radius: 2px;
      padding: 1px;
      text-align: left;
    }

    .amap-info-contentContainer:hover .amap-info-outer,
    .amap-menu-outer:hover {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .amap-info-content {
      position: relative;
      background: #fff;
      padding: 10px 18px 10px 10px;
      line-height: 1.4;
      overflow: auto;
    }

    .amap-marker-content {
      position: relative;
    }

    .amap-info-sharp-old {
      overflow: hidden;
      position: absolute;
      background-image: url(https://webapi.amap.com/images/arrows.png);
    }

    .bottom-center .amap-info-sharp-old {
      height: 12px;
      width: 20px;
      background-position: center 12px;
      top: 100%;
      left: 50%;
      margin: -9px auto 0 -10px;
    }

    .bottom-left .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -16px -46px;
      top: 100%;
      margin-top: -9px;
    }

    .bottom-right .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      top: -1px;
      background-position: -56px -46px;
      left: 100%;
      margin-left: -13px;
      top: 100%;
      margin-top: -9px;
    }

    .middle-left .amap-info-sharp-old {
      height: 20px;
      width: 12px;
      background-position: 0;
      top: 50%;
      margin-top: -10px;
      margin-left: -11px;
    }

    .center .amap-info-sharp-old {
      display: none;
    }

    .middle-right .amap-info-sharp-old {
      height: 20px;
      margin-right: 0;
      width: 12px;
      background-position: 100%;
      left: 100%;
      margin-left: -9px;
      top: 50%;
      margin-top: -10px;
    }

    .top-center .amap-info-sharp-old {
      height: 12px;
      width: 20px;
      background-position: top;
      top: 0;
      left: 50%;
      margin: -3px auto 0 -10px;
    }

    .top-left .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -16px -3px;
      top: 0;
      margin-top: -3px;
    }

    .top-right .amap-info-sharp-old {
      height: 12px;
      width: 13px;
      background-position: -56px -3px;
      left: 100%;
      margin-left: -13px;
      top: 0;
      margin-top: -3px;
    }

    .amap-info-sharp {
      position: absolute;
    }

    .bottom-center .amap-info-sharp {
      bottom: 0;
      left: 50%;
      border-top: 8px solid #fff;
    }

    .bottom-center .amap-info-sharp,
    .bottom-center .amap-info-sharp:after {
      margin-left: -8px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    .bottom-center .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: -7px;
      border-top: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(2px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after {
      border-top: 8px solid rgba(0, 0, 0, 0.5);
    }

    .bottom-left .amap-info-sharp {
      border-color: transparent #fff;
      border-style: solid;
      border-width: 0 0 10px 10px;
    }

    .bottom-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: -10px;
      border-color: transparent rgba(0, 0, 0, 0.3);
      border-style: solid;
      border-width: 0 0 10px 10px;
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after {
      border-color: transparent rgba(0, 0, 0, 0.5);
    }

    .bottom-left .amap-info-content {
      border-radius: 2px 2px 2px 0;
    }

    .bottom-right .amap-info-sharp {
      right: 0;
      border-top: 10px solid #fff;
      border-left: 10px solid transparent;
    }

    .bottom-right .amap-info-sharp:after {
      position: absolute;
      margin-top: -9px;
      margin-left: -10px;
      content: "";
      border-top: 10px solid rgba(0, 0, 0, 0.3);
      border-left: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after {
      border-top: 10px solid rgba(0, 0, 0, 0.5);
    }

    .bottom-right .amap-info-content {
      border-radius: 2px 2px 0 2px;
    }

    .top-center .amap-info-sharp {
      top: 0;
      left: 50%;
      border-bottom: 8px solid #fff;
    }

    .top-center .amap-info-sharp,
    .top-center .amap-info-sharp:after {
      margin-left: -8px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    .top-center .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      border-bottom: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .top-left .amap-info-sharp {
      left: 0;
      top: 0;
      border-bottom: 10px solid #fff;
      border-right: 10px solid transparent;
    }

    .top-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      margin-left: 0;
      border-bottom: 10px solid rgba(0, 0, 0, 0.3);
      border-right: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .top-right .amap-info-sharp {
      right: 0;
      top: 0;
      border-bottom: 10px solid #fff;
      border-left: 10px solid transparent;
    }

    .top-right .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-top: 0;
      margin-left: -10px;
      border-bottom: 10px solid rgba(0, 0, 0, 0.3);
      border-left: 10px solid transparent;
      filter: blur(1px);
      z-index: -1;
    }

    .middle-right .amap-info-sharp {
      right: 0;
      top: 50%;
      border-left: 8px solid #fff;
    }

    .middle-right .amap-info-sharp,
    .middle-right .amap-info-sharp:after {
      margin-top: -8px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    .middle-right .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: -8px;
      border-left: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.middle-right .amap-info-sharp:after {
      border-left: 8px solid rgba(0, 0, 0, 0.5);
    }

    .middle-left .amap-info-sharp {
      left: 0;
      top: 50%;
      border-right: 8px solid #fff;
    }

    .middle-left .amap-info-sharp,
    .middle-left .amap-info-sharp:after {
      margin-top: -8px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    .middle-left .amap-info-sharp:after {
      position: absolute;
      content: "";
      margin-left: 0;
      border-right: 8px solid rgba(0, 0, 0, 0.3);
      filter: blur(1px);
      z-index: -1;
    }

    .amap-info-contentContainer:hover.middle-left .amap-info-sharp:after {
      border-right: 8px solid rgba(0, 0, 0, 0.5);
    }

    .amap-info-contentContainer.top-center,
    .amap-info-contentContainer.top-left,
    .amap-info-contentContainer.top-right {
      padding-top: 8px;
    }

    .amap-info-contentContainer.bottom-center,
    .amap-info-contentContainer.bottom-left,
    .amap-info-contentContainer.bottom-right {
      padding-bottom: 8px;
    }

    .amap-info-contentContainer.middle-right {
      padding-right: 8px;
    }

    .amap-info-contentContainer.middle-left {
      padding-left: 8px;
    }

    .amap-menu-outer {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul.amap-menu-outer li {
      height: 35px;
      line-height: 35px;
      word-break: break-all;
      padding: 0 10px;
      font-size: 12px;
      white-space: nowrap;
    }

    ul.amap-menu-outer li a {
      text-decoration: none;
      font-size: 13px;
      margin: 0 5px;
      color: #000;
      padding: 5px;
    }

    ul.amap-menu-outer li:hover {
      background-color: #f3f3ee;
    }

    .amap-overlay-text-container {
      display: block;
      width: auto;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #fff;
      padding: 2px 3px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .amap-overlay-text-container.amap-overlay-text-empty {
      display: none;
    }

    .amap-info-content-ie8 {
      border: 1px solid #9c9c9c;
    }

    .amap-control {
      position: absolute;
      -webkit-tap-highlight-color: transparent;
    }

    .amap-toolbar {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }

    .amap-toolbar span {
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 0 0 4px 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      font-size: 20px;
    }

    .amap-toolbar span:first-child {
      border-bottom: 1px solid #eee;
      border-radius: 4px 4px 0 0;
    }

    .amap-toolbar span:hover {
      font-weight: bolder;
      background-color: #f0f0f0;
    }

    .amap-scalecontrol {
      pointer-events: none;
      background-color: hsla(0, 0%, 100%, 0.5);
      border-radius: 2px;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-text {
      font-size: 10px;
      text-align: center;
      transition: width 0.3s;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-line {
      position: relative;
      height: 8px;
      left: 2px;
      user-select: none;
    }

    .amap-scalecontrol .amap-scale-edgeleft,
    .amap-scalecontrol .amap-scale-edgeright,
    .amap-scalecontrol .amap-scale-middle {
      position: absolute;
      background-color: #333;
      overflow: hidden;
      box-sizing: content-box !important;
    }

    .amap-scalecontrol .amap-scale-edgeright {
      width: 1px;
      height: 6px;
      border: 1px solid #fff;
      transition: left 0.3s;
    }

    .amap-scalecontrol .amap-scale-middle {
      height: 2px;
      left: 2px;
      top: 2px;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: width 0.3s;
    }

    .amap-scalecontrol .amap-scale-edgeleft {
      width: 1px;
      height: 6px;
      border: 1px solid #fff;
    }

    .amap-controlbar,
    .amap-controlbar * {
      user-select: none;
    }

    .amap-controlbar .amap-luopan {
      width: 92px;
      height: 92px;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -22px -30px no-repeat;
      background-size: 348px 270px;
      user-select: none;
    }

    .amap-luopan .amap-compass {
      top: 46px;
      left: 50%;
      position: absolute;
      margin: -24px;
      width: 48px;
      height: 48px;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -231px -26px no-repeat;
      background-size: 348px 270px;
    }

    .amap-luopan .amap-compass.amap-compass-black {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) no-repeat -231px -79px;
      background-size: 348px 270px;
    }

    .amap-luopan .amap-compass .amap-pointers {
      position: absolute;
      width: 30px;
      height: 48px;
      top: 0;
      left: 9px;
      border: none;
      z-index: 2;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -281px -26px no-repeat;
      background-size: 348px 270px;
    }

    .amap-pitchDown,
    .amap-pitchUp {
      width: 30px;
      height: 25.5px;
      position: absolute;
      top: 3.5px;
      margin-left: -15px;
      left: 50%;
      z-index: 1;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -302.5px -49px
        no-repeat;
      background-size: 348px 270px;
    }

    .amap-pitchDown:hover,
    .amap-pitchUp:hover {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png)
        no-repeat -302.5px -23.5px;
      background-size: 348px 270px;
    }

    .amap-pitchDown {
      top: 66px;
      transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
    }

    .amap-rotateLeft,
    .amap-rotateRight {
      width: 21px;
      height: 52px;
      top: 19px;
      position: absolute;
      z-index: 2;
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png) -301.5px -77px
        no-repeat;
      background-size: 348px 270px;
    }

    .amap-rotateLeft:hover,
    .amap-rotateRight:hover {
      background: url(https://webapi.amap.com/theme/v1.3/controlbar/ctb.png)
        no-repeat -278.5px -76.5px;
      background-size: 348px 270px;
    }

    .amap-rotateLeft {
      left: 5px;
    }

    .amap-rotateRight {
      right: 5px;
      transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
    }

    .amap-ctrl-icon-layer {
      width: 30px;
      height: 30px;
    }

    .amap-ctrl-icon-layer,
    .amap-ctrl-list-layer {
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    }

    .amap-ctrl-list-layer {
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      z-index: 1;
    }

    .amap-ctrl-list-layer ul {
      overflow: hidden;
      list-style: none;
      margin: 0;
      padding: 5px 8px;
    }

    .amap-ctrl-list-layer ul li {
      float: left;
      width: 100%;
    }

    .amap-ctrl-list-layer ul p {
      white-space: nowrap;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      padding-left: 5px;
      margin: 0 10px;
    }

    .amap-ctrl-list-layer input {
      float: left;
      height: 20px;
      width: 12px;
      margin: 0 5px;
    }

    .amap-ctrl-base-layer {
      border-bottom: 1px solid #eee;
    }

    .amap-ranging-label {
      _width: 10px;
      font-size: 12px;
      line-height: 14px;
      background: #fff;
      border: 1px solid #ccc;
      padding: 3px 7px 3px 2px;
      white-space: nowrap;
    }

    .amap-ranging-label span {
      height: 12px;
      vertical-align: center;
      display: inline-block;
      white-space: nowrap;
      margin-left: 5px;
    }

    .amap-popup {
      text-align: center;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: -165px;
      margin-top: -170px;
    }

    .amap-popup-content {
      vertical-align: middle;
      line-height: 200px;
      overflow: hidden;
      background-color: #fff;
      border: solid;
      border-width: 3px 1px;
      border-radius: 5px;
      border-color: #ddf;
      margin: 0 auto;
      text-align: center;
      height: 340px;
    }

    .amap-labellayers {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: 0 0;
    }

    .amap-indoormap-floorbar-control {
      position: absolute;
      width: 40px;
      text-align: center;
      line-height: 1.3em;
      border-radius: 20px;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      margin-top: -100px;
    }

    .amap-indoormap-floorbar-control .floor-list-box {
      max-height: 160px;
      overflow: scroll;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      -webkit-user-select: none;
      -moz-user-select: none;
    }

    .floor-list-box::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }

    .amap-indoormap-floorbar-control ul {
      list-style: none;
      margin: 0;
      padding: 0 4px;
      width: 40px;
      box-sizing: border-box;
    }

    .amap-indoormap-floorbar-control ul li {
      height: 32px;
      width: 32px;
      border-radius: 16px;
    }

    .amap-indoormap-floorbar-control ul li:hover {
      background-color: #efefef;
    }

    .amap-indoormap-floorbar-control ul li div {
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
    }

    .amap-indoormap-floorbar-control ul li.selected {
      color: #fff;
      background-color: #4196ff;
    }

    .amap-indoormap-floorbar-control .floor-minus,
    .amap-indoormap-floorbar-control .floor-plus {
      height: 32px;
      width: 32px;
      margin: 0 auto;
      border-radius: 16px;
      position: relative;
    }

    .amap-indoormap-floorbar-control .floor-minus:after,
    .amap-indoormap-floorbar-control .floor-plus:after {
      content: "";
      position: absolute;
      margin: auto;
      bottom: 4px;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-top-color: #777;
    }

    .amap-indoormap-floorbar-control .floor-plus:after {
      border-bottom-color: #777;
      border-top-color: transparent;
      bottom: 11px;
    }

    .amap-indoormap-floorbar-control .floor-plus:hover:after {
      border-bottom-color: #222;
    }

    .amap-indoormap-floorbar-control .floor-minus:hover:after {
      border-top-color: #222;
    }

    .amap-indoormap-floorbar-control .floor-plus.disabled:after {
      border-bottom-color: #ddd;
    }

    .amap-indoormap-floorbar-control .floor-minus.disabled:after {
      border-top-color: #ddd;
    }

    .amap-indoormap-floorbar-control .floor-list-item.selected:after {
      right: 0;
      left: auto;
      border-left-color: transparent;
      border-right-color: #4196ff;
    }

    .amap-indoormap-floorbar-control .floor-btn.disabled,
    .amap-indoormap-floorbar-control .floor-btn.disabled *,
    .amap-indoormap-floorbar-control.with-indrm-loader * {
      -webkit-pointer-events: none !important;
      pointer-events: none !important;
    }

    .amap-indoormap-floorbar-control .with-indrm-loader .floor-nonas {
      opacity: 0.5;
    }

    .amap-logo {
      display: block !important;
      pointer-events: none;
    }

    .amap-geolocation {
      font-size: 12px;
      font-family:
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      line-height: 1.5;
      font-weight: 300;
      color: #111213;
      box-sizing: border-box;
      position: absolute;
      -webkit-tap-highlight-color: transparent;
      background-color: #fff;
      box-shadow: 0 0 5px silver;
      cursor: pointer;
      background-image: url(https://a.amap.com/jsapi/static/image/plugin/locate.png);
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      bottom: 15px;
      right: 15px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    .amap-hawkeye {
      transition:
        width 0.2s,
        height 0.2s;
    }

    .amap-hawkeye .button {
      position: absolute;
      z-index: 1;
      cursor: pointer;
      border-color: silver;
      border-style: solid none none solid;
      border-width: 1px;
      bottom: 0;
      right: 0;
      background-color: #fff;
      background-image: url(https://a.amap.com/jsapi/static/image/plugin/arrow.png);
      background-size: cover;
    }

    .amap-hawkeye .amap-container {
      z-index: 0;
      width: 100%;
      height: 100%;
      min-width: 1px;
      min-height: 1px;
    }

    .amap-hawkeye .amap-container .amap-copyright,
    .amap-hawkeye .amap-container .amap-logo {
      display: none !important;
    }
  `;
}
