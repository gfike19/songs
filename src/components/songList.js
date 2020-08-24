import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className=" ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render () {
        // this.props with mapToProps and connect will have value of songs: state.songs
        
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// state = everything inside a redux store
const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
// above syntax is because connect is function inception
// connect returns a function and THAT function returns a value
