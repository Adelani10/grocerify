import React from "react";
import { useContext } from "react";
import Item from "../components/item";
import { AddContext } from "../context";

export default function Home () {

    const {allItems} = useContext(AddContext)


    return (
            <div className='space-y-5 h-auto pb-6 md:pb-0 m-4 md:m-10'>
                <section className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between ">
                    <h1 className='text-xl leading-6 tracking-tight'>
                    <span className='text-[#F9A109] '>Grocerify</span> allows you to take your shopping list wherever you go!
                    </h1>

                    <input type="text" className='h-10 shadow shadow-zinc-300 px-2 rounded-md' placeholder='Search an item' />
                </section>

                <div className="space-y-6">

                    <section className="space-y-4">
                        <h2 className="font-semibold">
                            Fruits & Vegetables
                        </h2>
                        <article className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-3">
                            {allItems.map(item => {
                                if (item.category === 'fruits and vegetables'){
                                    return (
                                    <Item key={item.id} item={item} name={item.name}/>
                            )}})}
                        </article>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-semibold">
                            Meat & Fish
                        </h2>
                        <article className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-3">
                            {allItems.map(item => {
                                    if (item.category === 'meat and fish'){
                                        return (
                                        <Item key={item.id} item={item} name={item.name}/>
                            )}})}
                        </article>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-semibold">
                            Beverages
                        </h2>
                        <article className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-3">
                            {allItems.map(item => {
                                if (item.category === 'beverages'){
                                    return (
                                    <Item key={item.id} item={item} name={item.name}/>
                            )}})}
                        </article>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-semibold">
                            Pets
                        </h2>
                        <article className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-3">
                        {allItems.map(item => {
                                if (item.category === 'pets'){
                                    return (
                                    <Item key={item.id} item={item} name={item.name}/>
                        )}})}
                        </article>
                    </section>
                </div>


            </div>
    )
}