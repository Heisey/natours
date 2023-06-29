
export interface Context {
  navOpen: boolean
  toggleNav: () => void

  loginModalOpen: boolean
  toggleLoginModal: () => void
  closeLoginModal: () => void

  loadingOverlay: boolean
  setLoadingOverlay: (state: boolean) => void

  userModalOpen: boolean
  toggleUserModal: () => void
}