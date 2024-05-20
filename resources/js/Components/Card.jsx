import { TERipple } from 'tw-elements-react';

export default function Card({ className = '', title, badge, stat, statDesc, children, ...props }) {
    return (
        <div
            {...props}
            className={"block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 " +
                className}>
            <div className="flex justify-between">
                <div>
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {title}
                    </h5>
                </div>
                <div>
                    {badge ? (
                        <span
                            className="inline-block ml-8 whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
                        >{badge}</span>
                    ) : null}
                </div>
            </div>
            {children}
            {stat ? (<p className="text-sm pb-4">
                <span className="text-xs bg-green-500 text-green-100 px-2 py-1 rounded">{stat}</span> {statDesc}
            </p>) : null}
            <TERipple>
                <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                </button>
            </TERipple>
        </div>
    );
}