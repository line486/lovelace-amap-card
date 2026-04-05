import { css } from "lit";

export function amapCardStyle() {
  return css`
    .amap-card {
      overflow: hidden;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    #amapContainer {
      position: relative;
      height: 100%;
    }

    #amap {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KD0UqkwAAAf1JREFUeAHtmtGpAkEQBE9TMAi/zMb8MzCGU/97Ye8QunDrfQ7qNFUMS8Pbtom/fd8fEx/b/FymdIDL85p/wmmLgEJa5Ad7FTIA0xorpEV+sFchAzCtsUJa5Ad7FTIA0xorpEV+sPcyW1oG33f8WwL3qZ+blebnMs4DXGzqGWFv6hvSYx83KyRi6Q0V0mMfNyskYukNFdJjHzcrJGLpDRXSYx8329QjltrQpp7QH2jWv/5fA5t6EtKc+YY06YfdCglQmiOFNOmH3QoJUJojhTTph90KCVCaI4U06YfdNvUApTiyqSf4NvVEZdGZbwhMvEIUAiMAi+OFKARGABbHC1EIjAAsjk2dJcSmnnzY1BOVRWc+6jDxClEIjAAsjheiEBgBWBwvRCEwArA4/9LUbx+uLxjbM3Fs6omaTT1RWXTmow4TrxCFwAjA4nghCoERgMXxQhQCIwCL8y9NHYb1dBybekJnU09UFp35qMPEK0QhMAKwOF6IQmAEYHG8EIXACMDi2NRZQmzqyYdNPVFZdOajDhOvEIXACMDieCEKgRGAxfFCFAIjAItjU2cJsaknHzb1RGXRmY86TLxCFAIjAIvjhSgERgAWxwtRCIwALI5NnSXEpp582NQTlUVnPuow8QpRCIwALI4XohAYAVgcL0QhMAKwON+m/oRlWjrOG2SeYNIaKe7fAAAAAElFTkSuQmCC);
      touch-action: none;
      overflow: hidden;
      -ms-touch-action: none;
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
      bottom: 1px;
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
      width: 30px;
      height: 60px !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 0;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
    }

    .amap-ctrl-zoomin,
    .amap-ctrl-zoomout {
      height: 30px;
      cursor: pointer;
      padding: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: transparent !important;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 16px 16px;
    }

    .amap-ctrl-zoomin {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48Zz48Zz48L2c+PGc+PHBhdGggZD0iTTcuOTQxMzMyNTUzODYwNDc0LDEuMzM0OTk5OTIwMzYwNDczN0M3LjQxNjY2NjI1Mzg2MDQ3MywxLjM2NDk5OTkxNjg2MDQ3MzYsNi45OTk5OTk3NTM4NjA0NzM1LDEuODAwNjY2NTQzODYwNDczNiw2Ljk5OTk5OTc1Mzg2MDQ3MzUsMi4zMzMzMzMxOTM4NjA0NzM2TDYuOTk5OTk5NzUzODYwNDczNSw2Ljk5OTk5OTc1Mzg2MDQ3MzVMMi4zMzMzMzMxOTM4NjA0NzM2LDYuOTk5OTk5NzUzODYwNDczNUwyLjI3MTMzMzE1Mzg2MDQ3MzUsNy4wMDE5OTk2NTM4NjA0NzRDMS43Mzg2NjY1NjM4NjA0NzM3LDcuMDQwOTk5MTUzODYwNDc0LDEuMzMzMzMzMjUzODYwNDczNiw3LjQ3NTMzMjk1Mzg2MDQ3NCwxLjMzMzMzMzI1Mzg2MDQ3MzYsNy45OTk5OTkyNTM4NjA0NzRMMS4zMzQ5OTk5MjAzNjA0NzM3LDguMDU4NjY2NDUzODYwNDczQzEuMzY0OTk5OTE2ODYwNDczNiw4LjU4MzMzMjc1Mzg2MDQ3NSwxLjgwMDY2NjU0Mzg2MDQ3MzYsOC45OTk5OTkyNTM4NjA0NzMsMi4zMzMzMzMxOTM4NjA0NzM2LDguOTk5OTk5MjUzODYwNDczTDYuOTk5OTk5NzUzODYwNDczNSw4Ljk5OTk5OTI1Mzg2MDQ3M0w2Ljk5OTk5OTc1Mzg2MDQ3MzUsMTMuNjY2NjY2MjUzODYwNDczTDcuMDAxOTk5NjUzODYwNDc0LDEzLjcyODY2NjI1Mzg2MDQ3NEM3LjA0MDk5OTE1Mzg2MDQ3NCwxNC4yNjEzMzIyNTM4NjA0NzMsNy40NzUzMzI5NTM4NjA0NzQsMTQuNjY2NjY1MjUzODYwNDc0LDcuOTk5OTk5MjUzODYwNDc0LDE0LjY2NjY2NTI1Mzg2MDQ3NEw4LjA1ODY2NjQ1Mzg2MDQ3MywxNC42NjQ5OTkyNTM4NjA0NzRDOC41ODMzMzI3NTM4NjA0NzUsMTQuNjM0OTk4MjUzODYwNDczLDguOTk5OTk5MjUzODYwNDczLDE0LjE5OTMzMjI1Mzg2MDQ3NCw4Ljk5OTk5OTI1Mzg2MDQ3MywxMy42NjY2NjYyNTM4NjA0NzNMOC45OTk5OTkyNTM4NjA0NzMsOC45OTk5OTkyNTM4NjA0NzNMMTMuNjY2NjY2MjUzODYwNDczLDguOTk5OTk5MjUzODYwNDczTDEzLjcyODY2NjI1Mzg2MDQ3NCw4Ljk5Nzk5OTQ1Mzg2MDQ3M0MxNC4yNjEzMzIyNTM4NjA0NzMsOC45NTg5OTk4NTM4NjA0NzIsMTQuNjY2NjY1MjUzODYwNDc0LDguNTI0NjY2MDUzODYwNDczLDE0LjY2NjY2NTI1Mzg2MDQ3NCw3Ljk5OTk5OTI1Mzg2MDQ3NEwxNC42NjQ5OTkyNTM4NjA0NzQsNy45NDEzMzI1NTM4NjA0NzRDMTQuNjM0OTk4MjUzODYwNDczLDcuNDE2NjY2MjUzODYwNDczLDE0LjE5OTMzMjI1Mzg2MDQ3NCw2Ljk5OTk5OTc1Mzg2MDQ3MzUsMTMuNjY2NjY2MjUzODYwNDczLDYuOTk5OTk5NzUzODYwNDczNUw4Ljk5OTk5OTI1Mzg2MDQ3Myw2Ljk5OTk5OTc1Mzg2MDQ3MzVMOC45OTk5OTkyNTM4NjA0NzMsMi4zMzMzMzMxOTM4NjA0NzM2TDguOTk3OTk5NDUzODYwNDczLDIuMjcxMzMzMTUzODYwNDczNUM4Ljk1ODk5OTg1Mzg2MDQ3MiwxLjczODY2NjU2Mzg2MDQ3MzcsOC41MjQ2NjYwNTM4NjA0NzMsMS4zMzMzMzMyNTM4NjA0NzM2LDcuOTk5OTk5MjUzODYwNDc0LDEuMzMzMzMzMjUzODYwNDczNkw3Ljk0MTMzMjU1Mzg2MDQ3NCwxLjMzNDk5OTkyMDM2MDQ3MzdaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvc3ZnPg==);
    }

    .amap-ctrl-zoomout {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48Zz48Zz48L2c+PGc+PHBhdGggZD0iTTEzLjY2NjY2NjM3MzA2OTc2Myw3LjAwMDAwMDQ3NjgzNzE1OEwyLjMzMzMzMzMxMzA2OTc2Myw3LjAwMDAwMDQ3NjgzNzE1OEwyLjI3MTMzMzI3MzA2OTc2Myw3LjAwMjAwMDQ3NjkzNzE1OEMxLjczODY2NjY4MzA2OTc2MzIsNy4wNDEwMDA0Nzc4MzcxNTgsMS4zMzMzMzMzNzMwNjk3NjMyLDcuNDc1MzMzODA2ODM3MTU4LDEuMzMzMzMzMzczMDY5NzYzMiw4LjAwMDAwMDQ3NjgzNzE1OEMxLjMzMzMzMzM3MzA2OTc2MzIsOC41NTIzMzM4NzY4MzcxNTgsMS43ODEwMDAwMjMwNjk3NjMxLDkuMDAwMDAwNDc2ODM3MTU4LDIuMzMzMzMzMzEzMDY5NzYzLDkuMDAwMDAwNDc2ODM3MTU4TDEzLjY2NjY2NjM3MzA2OTc2Myw5LjAwMDAwMDQ3NjgzNzE1OEwxMy43Mjg2NjYzNzMwNjk3NjQsOC45OTgwMDA0NzY4MzcxNThDMTQuMjYxMzMyMzczMDY5NzYzLDguOTU5MDAwNDc2ODM3MTU4LDE0LjY2NjY2NTM3MzA2OTc2NCw4LjUyNDY2NzE3NjgzNzE2LDE0LjY2NjY2NTM3MzA2OTc2NCw4LjAwMDAwMDQ3NjgzNzE1OEMxNC42NjY2NjUzNzMwNjk3NjQsNy40NDc2NjcxNzY4MzcxNTgsMTQuMjE5MDAwMzczMDY5NzYzLDcuMDAwMDAwNDc2ODM3MTU4LDEzLjY2NjY2NjM3MzA2OTc2Myw3LjAwMDAwMDQ3NjgzNzE1OFoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L2c+PC9zdmc+);
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

    .amap-controlbar {
      transform: scale(0.7) !important;
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
      background-color: #fff;
      width: 30px !important;
      height: 30px !important;
      border-radius: 8px !important;
      cursor: pointer;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48Zz48Zz48L2c+PGc+PHBhdGggZD0iTTguMDAwMTYyNTkzNzUsMC4zMzMzNzQwMjM0Mzc1QzguMzUxNjE2ODkzNzUsMC4zMzMzNzQwMjM0Mzc1LDguNjM5NTUxMTkzNzUsMC42MDUzMzMzMjM0Mzc1LDguNjY1MDAwODkzNzUsMC45NTAyODY2ODM0Mzc1TDguNjY2ODI5MDkzNzUsMS4wMDAwNDA3NzM0Mzc1TDguNjY2ODI5MDkzNzUsMS42OTQ3MDY3MjM0Mzc1QzkuNjQ5NDE3ODkzNzUsMS43Nzg2NjA0MjM0Mzc1LDEwLjUzOTE4MDA5Mzc1LDIuMDQ4NzE3NjIzNDM3NDk5NywxMS4zMDcxNjUwOTM3NSwyLjQ3NTkyNTQyMzQzNzVDMTIuMjQ1NDM3MDkzNzUsMi45OTc4NTkwMjM0Mzc1LDEzLjAwMTkzODA5Mzc1LDMuNzU0MzYwNzIzNDM3NSwxMy41MjM4NzEwOTM3NSw0LjY5MjYzMjcyMzQzNzVDMTMuOTUxMTM3MDkzNzUsNS40NjA3MjI5MjM0Mzc1LDE0LjIyMTIxMTA5Mzc1LDYuMzUwNjI0NTIzNDM3NSwxNC4zMDUxMjUwOTM3NSw3LjMzMzM3NDAyMzQzNzVMMTUuMDAwMDAwMDkzNzUsNy4zMzMzNzQwMjM0Mzc1QzE1LjM2ODE5MDA5Mzc1LDcuMzMzMzc0MDIzNDM3NSwxNS42NjY2NjcwOTM3NSw3LjYzMTg1MDcyMzQzNzUsMTUuNjY2NjY3MDkzNzUsOC4wMDAwNDEwMjM0Mzc1QzE1LjY2NjY2NzA5Mzc1LDguMzUxNDk0ODIzNDM3NSwxNS4zOTQ3MDgwOTM3NSw4LjYzOTQyOTEyMzQzNzUsMTUuMDQ5NzU0MDkzNzUsOC42NjQ4Nzg4MjM0Mzc1TDE1LjAwMDAwMDA5Mzc1LDguNjY2NzA4MDIzNDM3NUwxNC4zMDUxMTEwOTM3NSw4LjY2NjcwODAyMzQzNzVDMTQuMjIxMTgxMDkzNzUsOS42NDkzOTMxMjM0Mzc1LDEzLjk1MTExNTA5Mzc1LDEwLjUzOTI0MDAyMzQzNzUsMTMuNTIzODcxMDkzNzUsMTEuMzA3Mjg4MDIzNDM3NUMxMy4wMDE5MzgwOTM3NSwxMi4yNDU1NjAwMjM0Mzc1LDEyLjI0NTQzNzA5Mzc1LDEzLjAwMjA2MTAyMzQzNzUsMTEuMzA3MTY1MDkzNzUsMTMuNTIzOTk0MDIzNDM3NUMxMC41MzkxODAwOTM3NSwxMy45NTEyMDIwMjM0Mzc1LDkuNjQ5NDE3ODkzNzUsMTQuMjIxMjU5MDIzNDM3NSw4LjY2NjgyOTA5Mzc1LDE0LjMwNTIxMzAyMzQzNzVMOC42NjY4MjkwOTM3NSwxNS4wMDAwMDAwMjM0Mzc1QzguNjY2ODI5MDkzNzUsMTUuMzY4MTkwMDIzNDM3NSw4LjM2ODM1Mjg5Mzc1LDE1LjY2NjY2NzAyMzQzNzUsOC4wMDAxNjI1OTM3NSwxNS42NjY2NjcwMjM0Mzc1QzcuNjQ4NzA4NzkzNzUsMTUuNjY2NjY3MDIzNDM3NSw3LjM2MDc3NDQ5Mzc1LDE1LjM5NDcwODAyMzQzNzUsNy4zMzUzMjQ3OTM3NSwxNS4wNDk3NTQwMjM0Mzc1TDcuMzMzNDk2MDkzNzUsMTUuMDAwMDAwMDIzNDM3NUw3LjMzMzQ5NjA5Mzc1LDE0LjMwNTI2ODAyMzQzNzVDNi4zNTA2NDk3OTM3NSwxNC4yMjEzNzgwMjM0Mzc1LDUuNDYwNjYzNzkzNzUsMTMuOTUxMjk3MDIzNDM3NSw0LjY5MjUxMDA5Mzc1LDEzLjUyMzk5NDAyMzQzNzVDMy43NTQyMzg1OTM3NSwxMy4wMDIwNjEwMjM0Mzc1LDIuOTk3NzM2ODkzNzUsMTIuMjQ1NTYwMDIzNDM3NSwyLjQ3NTgwMzM5Mzc1LDExLjMwNzI4ODAyMzQzNzVDMi4wNDg1NjAyOTM3NSwxMC41MzkyNDAwMjM0Mzc1LDEuNzc4NDkzODkzNzUsOS42NDkzOTMxMjM0Mzc1LDEuNjk0NTYzODkzNzUsOC42NjY3MDgwMjM0Mzc1TDEuMDAwMTYyNzgzNzUsOC42NjY3MDgwMjM0Mzc1QzAuNjMxOTcyOTQzNzUsOC42NjY3MDgwMjM0Mzc1LDAuMzMzNDk2MDkzNzUsOC4zNjgyMzA4MjM0Mzc1LDAuMzMzNDk2MDkzNzUsOC4wMDAwNDEwMjM0Mzc1QzAuMzMzNDk2MDkzNzUsNy42NDg1ODY3MjM0Mzc1LDAuNjA1NDU1MzczNzUsNy4zNjA2NTI0MjM0Mzc1LDAuOTUwNDA4NjkzNzUsNy4zMzUyMDI3MjM0Mzc1TDEuMDAwMTYyNzgzNzUsNy4zMzMzNzQwMjM0Mzc1TDEuNjk0NTQ5OTkzNzUsNy4zMzMzNzQwMjM0Mzc1QzEuNzc4NDY0MTkzNzUsNi4zNTA2MjQ1MjM0Mzc1LDIuMDQ4NTM2NjkzNzUsNS40NjA3MjI5MjM0Mzc1LDIuNDc1ODAzMzkzNzUsNC42OTI2MzI3MjM0Mzc1QzIuOTk3NzM2ODkzNzUsMy43NTQzNjA3MjM0Mzc1LDMuNzU0MjM4NTkzNzUsMi45OTc4NTkwMjM0Mzc1LDQuNjkyNTEwMDkzNzUsMi40NzU5MjU0MjM0Mzc1QzUuNDYwNjYzNzkzNzUsMi4wNDg2MjMzMjM0Mzc1LDYuMzUwNjQ5NzkzNzUsMS43Nzg1NDE0MjM0Mzc1LDcuMzMzNDk2MDkzNzUsMS42OTQ2NTEyMjM0Mzc1TDcuMzMzNDk2MDkzNzUsMS4wMDAwNDA3NzM0Mzc1QzcuMzMzNDk2MDkzNzUsMC42MzE4NTA4OTM0Mzc1LDcuNjMxOTcyNzkzNzUsMC4zMzMzNzQwMjM0Mzc1LDguMDAwMTYyNTkzNzUsMC4zMzMzNzQwMjM0Mzc1Wk03Ljk5MzAyMzM5Mzc1LDMuMDAwMDAzNjIzNDM3NUM2Ljk4ODg4MTA5Mzc1LDMuMDAxMDMxOTIzNDM3NSw2LjA5MDYzMTk5Mzc1LDMuMjI0MDYzODIzNDM3NSw1LjM0MDgzNDA5Mzc1LDMuNjQxMTU0NzIzNDM3NUM0LjYxOTcxNjY5Mzc1LDQuMDQyMjkxOTIzNDM3NDk5LDQuMDQyMjkxODkzNzUsNC42MTk3MTY2MjM0Mzc1LDMuNjQxMTU0NzkzNzUsNS4zNDA4MzQ2MjM0Mzc1QzMuMjI1MDU3NzkzNzUsNi4wODg4NDQ4MjM0Mzc1LDMuMDAyMDk2MTkzNzUsNi45ODQ2MDA1MjM0Mzc1LDMuMDAwMDE0NzkzNzUsNy45ODU4NDU1MjM0Mzc1QzMuMDAwMTEzNDkzNzUsNy45OTA1NjUzMjM0Mzc1LDMuMDAwMTYyNzkzNzUsNy45OTUyOTc0MjM0Mzc1LDMuMDAwMTYyNzkzNzUsOC4wMDAwNDEwMjM0Mzc1TDMuMDAwMDE0NzkzNzUsOC4wMTQyMjg4MjM0Mzc0OTlDMy4wMDIxMDY4OTM3NSw5LjAxNTQ0NDcyMzQzNzUsMy4yMjUwNjgwOTM3NSw5LjkxMTE3NDgyMzQzNzUsMy42NDExNTQ3OTM3NSwxMC42NTkxNjcwMjM0Mzc1QzQuMDQyMjkxODkzNzUsMTEuMzgwMjg0MDIzNDM3NSw0LjYxOTcxNjY5Mzc1LDExLjk1NzcwOTAyMzQzNzUsNS4zNDA4MzQwOTM3NSwxMi4zNTg4NDcwMjM0Mzc1QzYuMDkyMTM0OTkzNzUsMTIuNzc2NzczMDIzNDM3NSw2Ljk5MjQ4MjE5Mzc1LDEyLjk5OTg2MzAyMzQzNzUsNy45OTkwNjIwOTM3NSwxMy4wMDAwMDEwMjM0Mzc1TDcuOTk5OTk5OTkzNzUsMTMuMDAwMDAxMDIzNDM3NUw4LjAwMDE2MjU5Mzc1LDEzLjAwMDAwMDAyMzQzNzVDOS4wMDcwNTYxOTM3NSwxMi45OTk5NzcwMjM0Mzc1LDkuOTA3NjcyODkzNzUsMTIuNzc2ODgwMDIzNDM3NSwxMC42NTkxNjYwOTM3NSwxMi4zNTg4NDcwMjM0Mzc1QzExLjM4MDI4MzA5Mzc1LDExLjk1NzcwOTAyMzQzNzUsMTEuOTU3NzA4MDkzNzUsMTEuMzgwMjg0MDIzNDM3NSwxMi4zNTg4NDYwOTM3NSwxMC42NTkxNjcwMjM0Mzc1QzEyLjc3NjkwMjA5Mzc1LDkuOTA3NjMyODIzNDM3NSwxMy4wMDAwMDAwOTM3NSw5LjAwNjk1OTkyMzQzNzUsMTMuMDAwMDAwMDkzNzUsOC4wMDAwMDA1MjM0Mzc1QzEzLjAwMDAwMDA5Mzc1LDYuOTkzMDQyMDIzNDM3NSwxMi43NzY5MDIwOTM3NSw2LjA5MjM2ODEyMzQzNzUsMTIuMzU4ODQ2MDkzNzUsNS4zNDA4MzQ2MjM0Mzc1QzExLjk1NzcwODA5Mzc1LDQuNjE5NzE2NjIzNDM3NSwxMS4zODAyODMwOTM3NSw0LjA0MjI5MTkyMzQzNzQ5OSwxMC42NTkxNjYwOTM3NSwzLjY0MTE1NDcyMzQzNzVDOS45MDk0NDI4OTM3NSwzLjIyNDEwNDYyMzQzNzUsOS4wMTEyOTUyOTM3NSwzLjAwMTA3NTUyMzQzNzUsOC4wMDcyNzIxOTM3NTAwMDEsMy4wMDAwMDM4MjM0Mzc1TDguMDAwMTYyNTkzNzUsMy4wMDAwNDEwMjM0Mzc1TDcuOTkzMDIzMzkzNzUsMy4wMDAwMDM2MjM0Mzc1Wk01Ljk5OTk5OTk5Mzc1LDguMDAwMDAwMDIzNDM3NUM1Ljk5OTk5OTk5Mzc1LDYuODk1NDMwNTIzNDM3NSw2Ljg5NTQzMDU5Mzc1LDYuMDAwMDAwMDIzNDM3NSw3Ljk5OTk5OTk5Mzc1LDYuMDAwMDAwMDIzNDM3NUM5LjEwNDU2OTM5Mzc1LDYuMDAwMDAwMDIzNDM3NSw5Ljk5OTk5OTk5Mzc1LDYuODk1NDMwNTIzNDM3NSw5Ljk5OTk5OTk5Mzc1LDguMDAwMDAwNTIzNDM3NUM5Ljk5OTk5OTk5Mzc1LDkuMTA0NTcwNDIzNDM3NSw5LjEwNDU2OTM5Mzc1LDEwLjAwMDAwMDAyMzQzNzUsNy45OTk5OTk5OTM3NSwxMC4wMDAwMDAwMjM0Mzc1QzYuODk1NDMwNTkzNzUsMTAuMDAwMDAwMDIzNDM3NSw1Ljk5OTk5OTk5Mzc1LDkuMTA0NTcwNDIzNDM3NSw1Ljk5OTk5OTk5Mzc1LDguMDAwMDAwMDIzNDM3NVoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvZz48L3N2Zz4=);
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 50%;
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
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
