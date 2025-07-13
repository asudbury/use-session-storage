import{j as e,a as i,s as n}from"./storyStyles-34dff314.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const f={title:" Introduction",parameters:{docs:{description:{component:`
# 🚀 useSessionStorage

A powerful, production-ready React hook for SessionStorage management with comprehensive serialization support, type safety, and event handling.

## 🎯 Key Features

- **🔄 Automatic Serialization**: JSON serialization/deserialization with error handling
- **🛡️ Type Safe**: Full TypeScript support with generic types
- **⚡ Performance Optimized**: Efficient state management and memory leak prevention
- **🎛️ Event Handling**: Listen to storage changes across tabs/windows
- **📦 Default Values**: Support for default values and fallbacks
- **🔍 Validation**: Optional value validation with custom validators
- **🚫 SSR Safe**: Server-side rendering compatible
- **🔄 Synchronization**: Automatic sync across multiple hook instances
- **⏱️ Debounced Updates**: Optional debounced writes for performance
- **📊 State Management**: Comprehensive loading and error states

## 📦 Installation

\`\`\`bash
npm install use-session-storage
\`\`\`

## 🚀 Quick Start

\`\`\`tsx
import useSessionStorage from 'use-session-storage';

function MyComponent() {
  const [value, setValue, { loading, error, remove }] = useSessionStorage('my-key', 'default-value');

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button onClick={remove}>Clear</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
\`\`\`

## 🔧 Advanced Usage

### With TypeScript

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useSessionStorage<User>('user', {
    id: 0,
    name: '',
    email: ''
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

### With Validation

\`\`\`tsx
const [count, setCount] = useSessionStorage('count', 0, {
  validator: (value) => {
    if (typeof value !== 'number') throw new Error('Must be a number');
    if (value < 0) throw new Error('Must be positive');
    return value;
  }
});
\`\`\`

### With Debouncing

\`\`\`tsx
const [text, setText] = useSessionStorage('text', '', {
  debounceMs: 500 // Wait 500ms before writing to storage
});
\`\`\`

## ⚙️ Configuration Options

\`\`\`tsx
interface UseSessionStorageOptions<T> {
  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
  validator?: (value: any) => T;
  debounceMs?: number;
  syncAcrossInstances?: boolean;
  onError?: (error: Error) => void;
}
\`\`\`

## 🔄 Event Handling

Listen to storage changes across tabs and windows:

\`\`\`tsx
const [theme, setTheme] = useSessionStorage('theme', 'light');

// Automatically syncs when changed in other tabs
useEffect(() => {
  console.log('Theme changed to:', theme);
}, [theme]);
\`\`\`

## 🛡️ Error Handling

The hook provides comprehensive error handling for:
- JSON parsing errors
- Storage quota exceeded
- Invalid values
- Validation failures

## 🔧 TypeScript Support

Full TypeScript support with proper type inference and IntelliSense for complete type safety.
        `}}}},p=()=>i("div",{style:n.container,children:[i("div",{style:n.gradientHeader,children:[e("h1",{style:n.gradientHeaderTitle,children:"useSessionStorage"}),e("p",{style:n.gradientHeaderSubtitle,children:"A powerful React hook for SessionStorage management with comprehensive serialization support and type safety"})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",textAlign:"left"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#667eea",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.3)"},children:i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e("polyline",{points:"3.27,6.96 12,12.01 20.73,6.96"}),e("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"Installation"})]}),i("div",{style:{position:"relative",display:"block",width:"70%"},children:[i("pre",{style:{backgroundColor:"#f8f9fa",color:"#333",padding:"20px 50px 20px 40px",borderRadius:"8px",fontSize:"16px",fontFamily:"monospace",margin:"0",border:"1px solid #e9ecef",display:"flex",alignItems:"center"},children:[e("span",{style:{marginRight:"10px",color:"#666"},children:"$"}),"npm install use-session-storage"]}),e("button",{onClick:()=>{navigator.clipboard.writeText("npm install use-session-storage");const t=document.activeElement,h=t.innerHTML;t.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>',t.style.color="#4ade80",setTimeout(()=>{t.innerHTML=h,t.style.color="#9ca3af"},1e3)},style:{position:"absolute",top:"50%",right:"20px",transform:"translateY(-50%)",background:"none",border:"none",color:"#9ca3af",cursor:"pointer",fontSize:"18px",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",borderRadius:"4px",transition:"all 0.2s ease"},onMouseEnter:t=>{t.target.style.color="#666",t.target.style.backgroundColor="#f0f0f0"},onMouseLeave:t=>{t.target.style.color="#9ca3af",t.target.style.backgroundColor="transparent"},title:"Copy to clipboard",children:i("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(240, 147, 251, 0.3)"},children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"Key Features"})]}),i("ul",{style:{paddingLeft:"0",lineHeight:"1.8",fontSize:"16px",listStyle:"none"},children:[i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("polyline",{points:"20,6 9,17 4,12"})})}),i("span",{children:[e("strong",{children:"Automatic Serialization"}),": JSON serialization/deserialization with error handling"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#667eea",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),i("span",{children:[e("strong",{children:"Type Safe"}),": Full TypeScript support with generic types"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("polygon",{points:"13,2 3,14 12,14 11,22 21,10 12,10 13,2"})})}),i("span",{children:[e("strong",{children:"Performance Optimized"}),": Efficient state management and memory leak prevention"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),i("span",{children:[e("strong",{children:"Event Handling"}),": Listen to storage changes across tabs/windows"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#667eea",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"})})}),i("span",{children:[e("strong",{children:"Default Values"}),": Support for default values and fallbacks"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:i("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"M21 21l-4.35-4.35"})]})}),i("span",{children:[e("strong",{children:"Validation"}),": Optional value validation with custom validators"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M18 6L6 18M6 6l12 12"})})}),i("span",{children:[e("strong",{children:"SSR Safe"}),": Server-side rendering compatible"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#667eea",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:i("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("path",{d:"M3 3v5h5"}),e("path",{d:"M3 8l9-9 9 9-9 9-9-9"})]})}),i("span",{children:[e("strong",{children:"Synchronization"}),": Automatic sync across multiple hook instances"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:i("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("circle",{cx:"12",cy:"12",r:"10"}),e("polyline",{points:"12,6 12,12 16,14"})]})}),i("span",{children:[e("strong",{children:"Debounced Updates"}),": Optional debounced writes for performance"]})]}),i("li",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e("div",{style:{width:"24px",height:"24px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px",flexShrink:0},children:i("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("path",{d:"M3 3v5h5"}),e("path",{d:"M3 8l9-9 9 9-9 9-9-9"})]})}),i("span",{children:[e("strong",{children:"State Management"}),": Comprehensive loading and error states"]})]})]})]}),i("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",marginBottom:"30px"},children:[i("div",{style:{padding:"25px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",fontSize:"16px",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.08)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[e("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#667eea",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.3)"},children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e("h3",{style:{margin:0,color:"#2d3748",fontSize:"20px",fontWeight:"600"},children:"Type Safe"})]}),e("p",{style:{margin:0,color:"#4a5568",lineHeight:"1.6"},children:"Full TypeScript support with generic types for complete type safety and IntelliSense."})]}),i("div",{style:{padding:"25px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",fontSize:"16px",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.08)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[e("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#f093fb",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(240, 147, 251, 0.3)"},children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("polygon",{points:"13,2 3,14 12,14 11,22 21,10 12,10 13,2"})})}),e("h3",{style:{margin:0,color:"#2d3748",fontSize:"20px",fontWeight:"600"},children:"Performance"})]}),e("p",{style:{margin:0,color:"#4a5568",lineHeight:"1.6"},children:"Optimized for performance with built-in memory leak prevention and efficient state management."})]}),i("div",{style:{padding:"25px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",fontSize:"16px",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.08)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[e("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"#48bb78",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(72, 187, 120, 0.3)"},children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("path",{d:"M3 3v5h5"}),e("path",{d:"M3 8l9-9 9 9-9 9-9-9"})]})}),e("h3",{style:{margin:0,color:"#2d3748",fontSize:"20px",fontWeight:"600"},children:"Synchronized"})]}),e("p",{style:{margin:0,color:"#4a5568",lineHeight:"1.6"},children:"Automatic synchronization across multiple hook instances and tabs for seamless state management."})]})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(72, 187, 120, 0.3)"},children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("polygon",{points:"13,2 3,14 12,14 11,22 21,10 12,10 13,2"})})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"Quick Start"})]}),e("pre",{style:{backgroundColor:"#f8f9fa",color:"#333",padding:"20px",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace",margin:"0",border:"1px solid #e9ecef",overflow:"auto"},children:`import useSessionStorage from 'use-session-storage';

function MyComponent() {
  const [value, setValue, { loading, error, remove }] = useSessionStorage('my-key', 'default-value');

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button onClick={remove}>Clear</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}`})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#667eea",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.3)"},children:i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e("polyline",{points:"14,2 14,8 20,8"}),e("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e("polyline",{points:"10,9 9,9 8,9"})]})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"TypeScript Usage"})]}),e("pre",{style:{backgroundColor:"#f8f9fa",color:"#333",padding:"20px",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace",margin:"0",border:"1px solid #e9ecef",overflow:"auto"},children:`interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useSessionStorage<User>('user', {
    id: 0,
    name: '',
    email: ''
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(240, 147, 251, 0.3)"},children:i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"M21 21l-4.35-4.35"})]})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"With Validation"})]}),e("pre",{style:{backgroundColor:"#f8f9fa",color:"#333",padding:"20px",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace",margin:"0",border:"1px solid #e9ecef",overflow:"auto"},children:`const [count, setCount] = useSessionStorage('count', 0, {
  validator: (value) => {
    if (typeof value !== 'number') throw new Error('Must be a number');
    if (value < 0) throw new Error('Must be positive');
    return value;
  }
});`})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#48bb78",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(72, 187, 120, 0.3)"},children:i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[e("circle",{cx:"12",cy:"12",r:"3"}),e("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"Configuration Options"})]}),e("pre",{style:{backgroundColor:"#f8f9fa",color:"#333",padding:"20px",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace",margin:"0",border:"1px solid #e9ecef",overflow:"auto"},children:`interface UseSessionStorageOptions<T> {
  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
  validator?: (value: any) => T;
  debounceMs?: number;
  syncAcrossInstances?: boolean;
  onError?: (error: Error) => void;
}`})]}),i("div",{style:{marginBottom:"30px",padding:"30px",backgroundColor:"#ffffff",borderRadius:"12px",border:"1px solid #e9ecef",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.05)"},children:[i("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[e("div",{style:{width:"40px",height:"40px",backgroundColor:"#f093fb",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"15px",boxShadow:"0 4px 12px rgba(240, 147, 251, 0.3)"},children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:e("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e("h2",{style:{margin:0,fontSize:"28px",color:"#333"},children:"Error Handling"})]}),e("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#666"},children:"The hook provides comprehensive error handling for:"}),i("ul",{style:{paddingLeft:"20px",lineHeight:"1.8",fontSize:"16px",color:"#666"},children:[e("li",{children:"JSON parsing errors"}),e("li",{children:"Storage quota exceeded"}),e("li",{children:"Invalid values"}),e("li",{children:"Validation failures"})]})]})]}),r={render:()=>e(p,{})};var o,a,l,s,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <IntroductionComponent />
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source},description:{story:`Introduction Story\r

Welcome to useSessionStorage! This comprehensive introduction showcases\r
the hook's capabilities and guides you through the documentation.`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.description}}};const u=["Introduction"];export{r as Introduction,u as __namedExportsOrder,f as default};
