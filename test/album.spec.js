//getAlbuns
//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubpromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubpromise(sinon)

global.fetch = require('node-fetch')

import { getAlbuns, getAlbum, getAlbumTracks } from '../src/album'

describe('Album', ()=> {
  let stubedFetch

  beforeEach(()=> {
    stubedFetch =sinon.stub(global, 'fetch')
    stubedFetch.resolves({ json: () => {} })
  })

  afterEach(()=> {
    stubedFetch.restore()
  })

  describe('smoke tests', ()=> {
    it('should have getAlbum method', ()=> {
      expect(getAlbum).to.exist;
    })
    it('should have getAlbumTracks method',() => {
      expect(getAlbumTracks).to.exist;
    })
  })

  describe('getAlbum', () => {
    // verifica fetch ocorre
    it('should call fetch methos', () => {
      const album = getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj')
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj')

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')
    })


  })
  describe('getAlbuns', () => {
    // verifica fetch ocorre
    it('should call fetch method', () => {
      const album = getAlbuns()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const album = getAlbuns(['0sNOF9WDwhWunNAHPD3Baj', '4aawyAB9vmqN3uQ7FjRGTy'])
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=0sNOF9WDwhWunNAHPD3Baj,4aawyAB9vmqN3uQ7FjRGTy')
    })


  })
  describe('getAlbumTracks', () => {
    it('should call fetch metthod', () => {
      const album = getAlbumTracks()
      expect(stubedFetch).to.have.been.calledOnce

    })

    it('should call fetch with the correct URL', () => {
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks')
    })
  })
})
