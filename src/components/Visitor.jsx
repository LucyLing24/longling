import React, { useState, useEffect, useRef } from 'react';

export default function Visitor() {

    const mapContainerRef = useRef(null);
    // 1. 创建一个 state 来存储容器的实际宽度
    const [containerWidth, setContainerWidth] = useState(null);

    // 2. 这个 effect 用来测量宽度并监听窗口 resize
    useEffect(() => {
        const container = mapContainerRef.current;
        if (!container) return;

        // 封装一个函数来测量和设置宽度
        const measureAndSetWidth = () => {
            // .offsetWidth 会获取元素渲染后的实际像素宽度
            setContainerWidth(container.offsetWidth);
        };

        // 立即测量一次以获取初始宽度
        measureAndSetWidth();

        // 当窗口大小改变时，重新测量
        window.addEventListener('resize', measureAndSetWidth);

        // 清理：当组件卸载时，移除监听器
        return () => {
            window.removeEventListener('resize', measureAndSetWidth);
        };
    }, []); // 空数组 `[]` 确保这个 effect 只运行一次（来设置监听器）

    // 3. 这个 effect 用来注入脚本，它会[依赖] containerWidth
    //    当 containerWidth 改变时，它会重新运行！
    useEffect(() => {
        const container = mapContainerRef.current;

        // 如果还没有测量到宽度 (或宽度为0)，则不执行
        if (!container || !containerWidth) return;

        // A. 清理上一个脚本（如果存在）
        container.innerHTML = '';

        // B. 创建新脚本
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mapmyvisitors';

        // C. 动态构建 src，使用我们测量到的 containerWidth
        script.src = `https://mapmyvisitors.com/map.js?cl=eee&w=${containerWidth}&t=tt&d=ltd73CyIV7t_kxjcJMTKz-L0vmQL2zhyM_ipGcOEeyA&co=ffffff&cmo=ffbed2&cmn=f42e7a&ct=acacac`;
        script.async = true;

        // D. 注入新脚本
        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };

    }, [containerWidth]);

    return (
        <div
            ref={mapContainerRef}
            className="visitor-map-container"
            style={{
                width: '80%',
                margin: '0 auto',
                minHeight: '160px'
            }}
        >
        </div>
    );
}
