"use strict";(self.webpackJsonp__wix_thunderbolt_app=self.webpackJsonp__wix_thunderbolt_app||[]).push([["2242"],{65398(e,t,r){r.r(t),r.d(t,{ImportMapSymbol:()=>a.eV,site:()=>E,ESMLoaderSymbol:()=>a.VL});var a=r(84470),i=r(8716);let s=e=>`const react = ${e};

export default react;
export const {
	Component,
	PureComponent,
	Fragment,
	StrictMode,
	Suspense,
	Profiler,
	createElement,
	cloneElement,
	createFactory,
	createRef,
	forwardRef,
	isValidElement,
	createContext,
	memo,
	lazy,
	Children,
	startTransition,
	useCallback,
	useContext,
	useDebugValue,
	useDeferredValue,
	useEffect,
	useId,
	useImperativeHandle,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
	useSyncExternalStore,
	useTransition,
	act,
	unstable_act,
	version
} = react;`,o=e=>`
const ReactDOM = ${e};

export default ReactDOM;
export const findDOMNode = ReactDOM.findDOMNode;
export const {
	createPortal,
	flushSync,
} = ReactDOM;
`,n=()=>`
import React from 'react';

function assignKey(props, key) {
  if (key === undefined || key === null) return props;
  return Object.assign({}, props, { key });
}

export function jsx(type, props, key) {
  const finalProps = assignKey(props, key);
  return React.createElement(type, finalProps);
}

export function jsxs(type, props, key) {
  return jsx(type, props, key);
}

export const Fragment = React.Fragment;
export default { jsx, jsxs, Fragment };
`,c=()=>`
import React from 'react';
import { jsx } from 'react/jsx-runtime';

export function jsxDEV(type, props, key, _source, _self) {
  return jsx(type, props, key);
}

export const Fragment = React.Fragment;
export default { jsxDEV, Fragment };
`,l=(0,i.Og)([],()=>({getReactModuleCode:s,getReactDOMModuleCode:o,getReactJsxRuntimeCode:n,getReactJsxDevRuntimeCode:c}));var u=r(40766),d=r(27089),p=r(76526);let m=(0,i.Og)([a.Gs,u.RV,a.eV,u.Ht,d.n],(e,t,r,a,i)=>{let s={};return{prefetchScript:e=>{},loadModule:async o=>{let n=s[o];return n||e.runWithCache(o,async()=>{let e=r.bootstrap();e&&await e;let n=t?.importShim??(e=>import(e));if((0,p.isExperimentOpen)(i,"specs.thunderbolt.fixBuilderHierarchyLoadingRace")){a.interactionStarted("esm-module-load");try{let e=await n(o);return s[o]=e,e}finally{a.interactionEnded("esm-module-load")}}{a.interactionStarted("esm-module-load");let e=await n(o);return a.interactionEnded("esm-module-load"),s[o]=e,e}})}}}),v=(0,i.Og)([],()=>{let e=new Map;return{runWithCache:(t,r)=>{let a=e.get(t);if(a)return a;let i=r().catch(r=>{throw e.delete(t),r});return e.set(t,i),i}}});var g=r(66294),f=r(5250);let S="https://static.parastorage.com/services/thunderbolt-shims-static/1.0.0/es-module-shims.js";var x=r(40211),b=r.n(x);function h(e){let t=new Blob([e],{type:"text/javascript"});return URL.createObjectURL?.(t)||""}let y=(0,i.Og)([a.Es,u.RV,(0,i.KT)(g.YG,a.UU),u.Ht],(e,t,{publicPackagesUrls:r,isBuilderComponentModel:a},i)=>{let s,o,n,c,l="true"===new URLSearchParams(t?.location?.search).get("forceUseShimForLocalTests"),u=!!t&&!!a&&(l||!((e,t)=>{if(!t){let t=(0,f.O)(e);if(t)return t>18||18===t&&Number(e.navigator.userAgent.match(/os \d+_(\d+)/i)?.[1]??0)>=4;if((0,f.gm)(e))return!1;if((0,f.nr)(e)){let t=(0,f.PV)(e);return -1!==t&&t>=18.4}return!0}if((0,f.lT)(e)||(0,f.gm)(e))return!1;if((0,f.nr)(e)){let t=(0,f.PV)(e);return -1!==t&&t>=18.4}return(0,f.UP)(e)?(0,f.Jp)(e,"edge")>=133:(0,f.H8)(e)?(0,f.Jp)(e,"chrome")>=133:!!(0,f.GQ)(e)&&(0,f.Jp)(e,"opera")>=118})(t,!1)),d=!1,p=r.esm,m=!u,v=b().once(async()=>{await new Promise((e,r)=>{t.esmsInitOptions={shimMode:!0};let a=t.document.createElement("script");a.src=S,a.async=!0,i.interactionStarted("esm-shim-load"),a.onload=()=>{i.interactionEnded("esm-shim-load"),e()},a.onerror=()=>{let e=Error(`ESM shim script failed to load from ${S}`);i.captureError(e,{tags:{feature:"builder-module-loader"},extra:{url:S}}),r(e)},t.document.head.appendChild(a)}),await R(),m=!0}),g=u?v():void 0,x={react:h(e.getReactModuleCode("window.React")),"react-dom":h(e.getReactDOMModuleCode("window.ReactDOM")),"react/jsx-runtime":h(e.getReactJsxRuntimeCode()),"react/jsx-dev-runtime":h(e.getReactJsxDevRuntimeCode()),"@wix/builder-interactions":p["builder-interactions"],"@wix/builder-state":p["builder-state"],"@wix/builder-state-react":p["builder-state-react"],"@wix/builder-velo":p["builder-velo"],"@wix/builder-velo-react":p["builder-velo-react"],"@wix/services-manager":h((s=p["services-manager"],`
  const s = window.servicesManager || await import('${s}');

  const getService = s.getService;
  const globalServicesManagerController = s.globalServicesManagerController;
  const createServicesManager = s.createServicesManager;
  const createServicesMap = s.createServicesMap;

  export { getService, globalServicesManagerController, createServicesManager, createServicesMap };
`)),"@wix/services-manager/helpers":h((o=p["services-manager/helpers"],`
  const s = await import('${o}');

  const defineService = s.defineService;
  const implementService = s.implementService;

  export { defineService, implementService };
`)),"@wix/services-manager/core-services/signals":h((n=p["services-manager/core-services/signals"],`
  const s = await import('${n}');

  const SignalsServiceDefinition = s.SignalsServiceDefinition;

  export { SignalsServiceDefinition };
`)),"@wix/services-manager-react":h((c=p["services-manager-react"],`
  const s = window.servicesManagerReact || await import('${c}');

  const WixServices = s.WixServices;
  const useServices = s.useServices;
  const useService = s.useService;
  const useGetService = s.useGetService;
  const ServicesManagerProvider = s.ServicesManagerProvider;
  
  export { WixServices, useServices, useService, useGetService, ServicesManagerProvider };
`)),"@wix/builder-element-removal":p["builder-element-removal"],"@wix/builder-utils":p["builder-utils"]},y=new Set(Object.keys(x)),M=0,w=e=>{Object.entries(e).forEach(([e,t])=>{y.has(e)||(x[e]=t)})},R=async()=>{if(!t?.document)return;let e=t.document.createElement("script");e.id=`builder-module-loader-importmap-${M}`,e.type=u?"importmap-shim":"importmap",e.textContent=JSON.stringify({imports:x}),t.document.head.appendChild(e),Object.keys(x).forEach(e=>y.add(e)),x={},M++};return{updateImportMap:w,commitImportMapUpdates:R,updateAndCommit:e=>{if(0!==Object.keys(e).length){if(d&&1)return void i.captureError(Error("Import maps can only be committed once on public sites. To extend the import map, register dependencies via ImportMapProviderSymbol."),{tags:{feature:"builder-module-loader",methodName:"commitImportMapUpdates"}});d=!0,w(e),R()}},bootstrap:()=>{if(!m)return g}}});var M=r(90009);let w=(0,i.Og)([a.eV,(0,i.m3)(M.R)],(e,t)=>({appWillMount:()=>{let r=t.map(e=>e.provideImportMap()).reduce((e,t)=>(Object.assign(e,t),e),{});e.updateAndCommit(r)}}));var R=r(83121);let E=e=>{e(a.Es).to(l),e(a.Gs).to(v),e(a.eV).to(y),e(a.VL).to(m),e(R.$.AppWillMountHandler).to(w)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/builderModuleLoader.695113e5.chunk.min.js.map