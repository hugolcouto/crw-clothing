import React, { Component } from 'react';

import { MenuItem } from './MenuItem';


export class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: "large",
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: "large",
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }


    render() {
        return (
            <ul className="directory-menu">
                {this.state.sections.map(item => (
                    <MenuItem
                        key={item.id}
                        size={item.size}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </ul>
        )
    }
}